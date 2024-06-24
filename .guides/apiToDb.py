import requests
import pandas as pd
import sqlalchemy as db

#creating data frame to add data to
col_names = ['Title', 'Author', 'Link']
df  = pd.DataFrame(columns = col_names)

#get most recent post ID
response = requests.get("https://hacker-news.firebaseio.com/v0/maxitem.json?print=pretty")
mostRecent = response.json()

#loop through the last 100 posts and add only stories to dataframe
response = requests.get("https://hacker-news.firebaseio.com/v0/item/"+str(mostRecent)+".json?print=pretty")
data = response.json()
for i in range(int(mostRecent)-100, int(mostRecent)-1):
  if data is not None and data['type'] == 'story' and 'title' in data and 'by' in data and 'url' in data:
    df.loc[len(df.index)] = [data['title'], data['by'], data['url']]
    print("Added " + data['title'])
  mostRecent = int(mostRecent) - 1
  response = requests.get("https://hacker-news.firebaseio.com/v0/item/"+str(mostRecent)+".json?print=pretty")
  data = response.json()

##print(df)
  
#migrating dataframe to SQLdatabase
engine = db.create_engine('sqlite:///hackernews.db')
df.to_sql('stories', con=engine, if_exists='replace', index=False)

# new syntax with sqlalchemy 2.0
with engine.connect() as connection:
    result = connection.execute(db.text("SELECT * FROM stories ORDER BY Title ASC;")).fetchall()
    print(pd.DataFrame(result))

# alphabetized = engine.execute("SELECT * FROM stories ORDER BY Title ASC;").fetchall()
# print(pd.DataFrame(alphabetized))