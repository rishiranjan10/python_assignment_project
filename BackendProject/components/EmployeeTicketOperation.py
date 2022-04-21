def createTicket(connection,ticketData):

    cur = connection.cursor()

    responseDictionary = {"status": True,"message":"Ticket Created Successfully"}

    isValidated = validateTicketData(ticketData)

    ticketData['ticketstatus'] = "NEW"


    if(isValidated):
        cur.execute('select id from employee where email = %s and pass = %s',(ticketData.get('email'),
        ticketData.get('password'),))
        idData = cur.fetchall()
        if(len(idData) == 1):
            id = idData[0][0]
            cur.execute('insert into ticket (ticketname,description,level,ticketstatus,ticketassignee,employeeid)'
            'values(%s,%s,%s,%s,%s,%s)',(ticketData.get('ticketname'),ticketData.get('description'),
            ticketData.get('level'),ticketData.get('ticketstatus'),None,id,))
            connection.commit()
        else:
            responseDictionary['status'] = False
            responseDictionary['message'] = 'Invalid User for creating ticket'
    else:
        responseDictionary['status'] = False
        responseDictionary['message'] = 'Invalid input data'

    return responseDictionary

def validateTicketData(ticketData):
    isValidated = True
    if(ticketData.get('ticketname') == None or len(ticketData.get('ticketname')) == 0):
        isValidated = False
    if(ticketData.get('description') == None or len(ticketData.get('description')) == 0):
        isValidated = False
    if(ticketData.get('email') == None or len(ticketData.get('email')) == 0):
        isValidated = False
    if(ticketData.get('password') == None or len(ticketData.get('password')) == 0):
        isValidated = False
    return isValidated

def getEmployeeTickets(connection,employeeData):

    data = []
    eachTicket = {}

    cur = connection.cursor()

    responseDictionary = {"status": True,"message":"Successful"}

    isValidated = validateLogin(employeeData)

    if(isValidated):
        cur.execute('select id from employee where email = %s and pass = %s',(employeeData.get('email'),
        employeeData.get('password'),))
        idData = cur.fetchall()
        if(len(idData) == 1):
            id = idData[0][0]
            cur.execute('select * from ticket where employeeid = %s',(id,))
            dbEmloyeeData = cur.fetchall()
            if(len(dbEmloyeeData) > 0):
                for i in range(0,len(dbEmloyeeData)):
                    eachTicket['id'] = dbEmloyeeData[i][0]
                    eachTicket['ticketname'] = dbEmloyeeData[i][1]
                    eachTicket['description'] = dbEmloyeeData[i][2]
                    eachTicket['level'] = dbEmloyeeData[i][3]
                    eachTicket['ticketstatus'] = dbEmloyeeData[i][4]
                    eachTicket['ticketassignee'] = dbEmloyeeData[i][5]
                    data.append(eachTicket)
                    eachTicket = {}
                responseDictionary['data'] = data
            else:
                responseDictionary['data'] = data
        else:
            responseDictionary['status'] = False
            responseDictionary['message'] = 'Invalid User for creating ticket'
 
    else:
        responseDictionary['status'] = False
        responseDictionary['message'] = 'Invalid Input data'
    
    return responseDictionary


def validateLogin(employeeData):
    isValidated = True
    if(employeeData.get('email') == None or len(employeeData.get('email')) == 0):
        isValidated = False
    if(employeeData.get('password') == None or len(employeeData.get('password')) == 0):
        isValidated = False
    return isValidated

def editEmployeeTicket(connection,ticketData):

    cur = connection.cursor()
    
    responseDictionary = {"status": True,"message":"Update Successful"}

    isValidated = validateUpdateticket(ticketData)

    if(isValidated):
        cur.execute('select id from employee where email = %s and pass = %s',(ticketData.get('email'),
        ticketData.get('password'),))
        idData = cur.fetchall()
        cur.execute('select count(*) from ticket where id = %s',(ticketData.get('id'),))
        ticketId = cur.fetchall()
        if(len(idData) == 1 & len(ticketId) == 1):
            cur.execute('update ticket set ticketname = %s,description = %s, level = %s where id = %s',(ticketData.get('ticketname'),
            ticketData.get('description'),ticketData.get('level'),ticketData.get('id'),))
            connection.commit()
        else:
            responseDictionary['status'] = False
            responseDictionary['message'] = "Failed to update, Due to Invalid Employee data or Invalid Ticket Number"
        
    else:
        responseDictionary['status'] = False
        responseDictionary['message'] = "Invalid Input data"

    return responseDictionary

def validateUpdateticket(ticketData):
    isValidated = True
    if(ticketData.get('id') == None):
        isValidated = False
    if(ticketData.get('ticketname') == None or len(ticketData.get('ticketname')) == 0):
        isValidated = False
    if(ticketData.get('description') == None or len(ticketData.get('description')) == 0):
        isValidated = False
    if(ticketData.get('level') == None or len(ticketData.get('level')) == 0):
        isValidated = False
    if(ticketData.get('email') == None or len(ticketData.get('email')) == 0):
        isValidated = False
    if(ticketData.get('password') == None or len(ticketData.get('password')) == 0):
        isValidated = False
    return isValidated

def deleteTicket(connection,deleteData):

    cur = connection.cursor()

    responseDictionary = {"status": True,"message":"Ticket Deleted Successfully"}

    isValidated = validateDeleteTicketData(deleteData)

    if(isValidated):
        cur.execute('select id from employee where email = %s and pass = %s',(deleteData.get('email'),
        deleteData.get('password'),))
        idData = cur.fetchall()
        if(len(idData) == 1):
            employeeId = idData[0][0]
            cur.execute('select * from ticket where id = %s and employeeid = %s',(deleteData.get('id'),employeeId))
            ticketId = cur.fetchall()
            if(len(ticketId) == 1):
                cur.execute('delete from ticket where id = %s and employeeid = %s',(deleteData.get('id'),employeeId))
                connection.commit()
            else:
                responseDictionary['status'] = False
                responseDictionary['message'] = 'Ticket Cannot be deleted due to Invalid user / No ticket Data'
        else:
            responseDictionary['status'] = False
            responseDictionary['message'] = 'Invalid User data'
    else:
        responseDictionary['status'] = False
        responseDictionary['message'] = "Invalid Input Data"
    
    return responseDictionary

def validateDeleteTicketData(deleteData):
    isValidated = True
    if(deleteData.get('id') == None):
        isValidated = False
    if(deleteData.get('email') == None or len(deleteData.get('email')) == 0):
        isValidated = False
    if(deleteData.get('password') == None or len(deleteData.get('password')) == 0):
        isValidated = False
    return isValidated

def checkUserPresentOrNot(cur,email,password):
    cur.execute('select id from employee where email = %s and pass = %s',(email,
    password,))
    idData = cur.fetchall()
    if(len(idData) == 1):
        return True
    else:
        return False



