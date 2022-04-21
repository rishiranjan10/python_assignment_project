def teamlogin(connection,teamlogInData):

    cur = connection.cursor()
    
    responseDictionary = {"status": True,"message":"Successful Admin team member Login"}

    isValidated = validateLogInData(teamlogInData)

    responseDictionary['email'] = teamlogInData.get('email')
    responseDictionary['password'] = teamlogInData.get('password')

    if(isValidated):
        cur.execute('select count(*) from adminteam where email = %s and pass = %s',(teamlogInData.get('email'),
        teamlogInData.get('password'),))
        count = cur.fetchall()[0][0]
        if(count != 1):
            responseDictionary['status'] = False
            responseDictionary['message'] = 'Login Failed'
    else:
        responseDictionary['status'] = False
        responseDictionary['message'] = 'Invalid Input data'

    return responseDictionary

def adminLogin(connection,adminLogin):

    cur = connection.cursor()
    
    responseDictionary = {"status": True,"message":"Successful Admin Login"}

    isValidated = validateLogInData(adminLogin)

    responseDictionary['email'] = adminLogin.get('email')
    responseDictionary['password'] = adminLogin.get('password')

    if(isValidated):
        cur.execute('select count(*) from admin where email = %s and pass = %s',(adminLogin.get('email'),
        adminLogin.get('password'),))
        count = cur.fetchall()[0][0]
        if(count != 1):
            responseDictionary['status'] = False
            responseDictionary['message'] = 'Login Failed'
    else:
        responseDictionary['status'] = False
        responseDictionary['message'] = 'Invalid Input data'

    return responseDictionary

def employeeLogIN(connection,employeeLogInData):

    cur = connection.cursor()
    
    responseDictionary = {"status": True,"message":"Successful Employee Login"}

    isValidated = validateLogInData(employeeLogInData)

    responseDictionary['email'] = employeeLogInData.get('email')
    responseDictionary['password'] = employeeLogInData.get('password')

    if(isValidated):
        cur.execute('select count(*) from employee where email = %s and pass = %s',(employeeLogInData.get('email'),
        employeeLogInData.get('password'),))
        count = cur.fetchall()[0][0]
        if(count != 1):
            responseDictionary['status'] = False
            responseDictionary['message'] = 'Login Failed'
    else:
        responseDictionary['status'] = False
        responseDictionary['message'] = 'Invalid Input data'


    return responseDictionary

def validateLogInData(employeeLogInData):
    isValidated = True
    if(employeeLogInData.get('email') == None or len(employeeLogInData.get('email')) == 0):
        isValidated = False
    if(employeeLogInData.get('password') == None or len(employeeLogInData.get('password')) == 0):
        isValidated = False
    return isValidated

def employeeSignUP(connection,employeeSignUPData):

    cur = connection.cursor()

    responseDictionary = {"status": True,"message":"Successful Created the Employee"}

    isValidated = validateSignUPData(employeeSignUPData)

    if(isValidated): 
        cur.execute('select count(*) from employee where email = %s',(employeeSignUPData.get('email'),))
        count = cur.fetchall()[0][0]
        if(count == 0):
            cur.execute('insert into employee (first_name,last_name,email,phonenumber,department,pass)'
            'values(%s,%s,%s,%s,%s,%s)',(employeeSignUPData.get('firstname'),employeeSignUPData.get('lastname'),
            employeeSignUPData.get('email'),employeeSignUPData.get('phoneNumber'),employeeSignUPData.get('department'),
            employeeSignUPData.get('password'),))
            connection.commit()
        else:
            responseDictionary['status'] = False
            responseDictionary['message'] = 'Email ID already Exist'
    else:
        responseDictionary['status'] = False
        responseDictionary['message'] = 'Invalid Input Data'

    return responseDictionary

def validateSignUPData(employeeSignUPData):
    isValidated = True
    if(employeeSignUPData.get('firstname') == None or len(employeeSignUPData.get('firstname')) == 0):
        isValidated = False
    if(employeeSignUPData.get('lastname') == None or len(employeeSignUPData.get('lastname')) == 0):
        isValidated = False
    if(employeeSignUPData.get('email') == None or len(employeeSignUPData.get('email')) == 0):
        isValidated = False
    if(employeeSignUPData.get('phoneNumber') == None or len(employeeSignUPData.get('phoneNumber')) == 0):
        isValidated = False
    if(employeeSignUPData.get('department') == None or len(employeeSignUPData.get('department')) == 0):
        isValidated = False
    if(employeeSignUPData.get('password') == None or len(employeeSignUPData.get('password')) == 0):
        isValidated = False
    return isValidated