import pandas as pd
import sqlite3
conn = sqlite3.connect('ecommerce.db')
df = pd.read_csv('products.csv')
df.to_sql('products',conn,if_exists='replace',index=False)
conn.close()
