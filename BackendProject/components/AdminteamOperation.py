def getAdminteamticket(connection,adminteamData):

    cur = connection.cursor()

    data = []
    eachTicket = {}

    responseDictionary = {'status':True,'message':'Successfully fetched tickets','data':[]}

    isValidated = validateadminteamData(adminteamData)

    if(isValidated):
        cur.execute('select id from adminteam where email = %s and pass = %s',(adminteamData.get('email'),
        adminteamData.get('password'),))
        idData = cur.fetchall()
        if(len(idData) == 1):
            id = idData[0][0]
            cur.execute('select * from ticket t join employee e on t.employeeid = e.id where t.ticketassignee = %s',(id,))
            ticketData = cur.fetchall()
            if(len(ticketData) > 0):
                for i in range(0,len(ticketData)):
                    eachTicket['id'] = ticketData[i][0]
                    eachTicket['name'] = ticketData[i][1]
                    eachTicket['description'] = ticketData[i][2]
                    eachTicket['level'] = ticketData[i][3]
                    eachTicket['ticketstatus'] = ticketData[i][4]
                    eachTicket['firstname'] = ticketData[i][8]
                    eachTicket['lastname'] = ticketData[i][9]
                    eachTicket['email'] = ticketData[i][10]
                    eachTicket['phone'] = ticketData[i][11]
                    eachTicket['department'] = ticketData[i][12]
                    data.append(eachTicket)
                    eachTicket = {}
                    responseDictionary['data'] = data
            else:
                responseDictionary['status'] = True
                responseDictionary['message'] = 'No tickets associated with you'
            print('Ticket Data:',ticketData)
        else:
            responseDictionary['status'] = False
            responseDictionary['message'] = 'Invalid User Data'
    else:
        responseDictionary['status'] = False
        responseDictionary['message'] = 'Wrong user input'
    return responseDictionary

def validateadminteamData(adminteamData):
    isValidated = True
    if(adminteamData.get('email') == None or len(adminteamData.get('email')) == 0):
        isValidated = False
    if(adminteamData.get('password') == None or len(adminteamData.get('password')) == 0):
        isValidated = False
    return isValidated 

def changeStatus(connection, statusData):

    print('Coming or not')

    cur = connection.cursor()

    responseDictionary = {'status':True,'message':'Status Updated Successfully'}

    isValidated = validateStatusdata(statusData)

    if(isValidated):
        cur.execute('select id from adminteam where email = %s and pass = %s',(statusData.get('email'),
        statusData.get('password'),))
        idData = cur.fetchall()
        if(len(idData) == 1):
            cur.execute('select * from ticket where id = %s',(statusData.get('id'),))
            ticketData = cur.fetchall()
            if(len(ticketData) == 1):
                cur.execute('update ticket set ticketstatus = %s where id = %s',(statusData.get('ticketstatus'),
                statusData.get('id'),))
                connection.commit()
            else:
                responseDictionary['status'] = False
                responseDictionary['message'] = 'No ticket associate with the given ID'
        else:
            responseDictionary['status'] = False
            responseDictionary['message'] = 'Invalid User data'
    else:
        responseDictionary['status'] = False
        responseDictionary['message'] = 'Wrong input data'
    
    return responseDictionary

def validateStatusdata(statusData):
    isValidated = True
    if(statusData.get('id') == None):
        isValidated = False
    if(statusData.get('email') == None or len(statusData.get('email')) == 0):
        isValidated = False
    if(statusData.get('password') == None or len(statusData.get('password')) == 0):
        isValidated = False
    if(statusData.get('ticketstatus') == None or len(statusData.get('ticketstatus')) == 0):
        isValidated = False
    return isValidated 
