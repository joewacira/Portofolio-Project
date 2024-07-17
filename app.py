from flask import Flask, request, jsonify
import mysql.connector


mydb = mysql.connector.connect(
  host="your_host",
  user="your_user",
  password="your_password",
  database="your_database"
)


@app.route('/submit_data', methods=['POST'])
def submit_data():
  data = request.form
  name = data['name']
  email = data['email']

  
  cursor = mydb.cursor()
  sql = "INSERT INTO your_table (name, email) VALUES (%s, %s)"
  val = (name, email)
  cursor.execute(sql, val)
  mydb.commit()

  return jsonify({'message': 'Data submitted successfully'})

if __name__ == '__main__':
  app.run(debug=True)