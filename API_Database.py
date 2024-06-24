import pandas as pd
import sqlalchemy as db


data = {'Name': ['Alice', 'Bob', 'Charlie'], 'Age': [25, 30, 35], 'City': ['New York', 'Los Angeles', 'Chicago']}
df = pd.DataFrame.from_dict(data, orient='columns')


engine = db.create_engine('sqlite:///data_base_name.db')


df.to_sql('drivers', con=engine, if_exists='replace', index=False)


with engine.connect() as connection:
    query_result = connection.execute(db.text("SELECT * FROM drivers;")).fetchall()
    print(pd.DataFrame(query_result))