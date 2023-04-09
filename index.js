// Your code here
function createEmployeeRecord(array) {
    const employeeRecord = {
      firstName: array[0],
      familyName: array[1],
      title: array[2],
      payPerHour: array[3],
      timeInEvents: [],
      timeOutEvents: []
    };
    return employeeRecord;
  }
  
  function createEmployeeRecords(arrays) {
    const employeeRecords = [];
    for (let array of arrays) {
      const employeeRecord = createEmployeeRecord(array);
      employeeRecords.push(employeeRecord);
    }
    return employeeRecords;
  }

  function createTimeInEvent(employeeRecord, dateStamp) {
    const [date, hour] = dateStamp.split(" ");
  
    employeeRecord.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date: date
    });
  
    return employeeRecord;
  }

  function createTimeOutEvent(employeeRecord, dateStamp) {
    const [date, hour] = dateStamp.split(" ");
  
    employeeRecord.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date: date
    });
  
    return employeeRecord;
  }
  
  function hoursWorkedOnDate(employeeRecord, date) {
    const timeIn = employeeRecord.timeInEvents.find(event => event.date === date);
    const timeOut = employeeRecord.timeOutEvents.find(event => event.date === date);
  
    if (!timeIn || !timeOut) {
      return 0;
    }
  
    const hoursWorked = (timeOut.hour - timeIn.hour) / 100;
    return hoursWorked;
  }

  function wagesEarnedOnDate(employeeRecord, date) {
    const hoursWorked = hoursWorkedOnDate(employeeRecord, date);
    const wagesEarned = hoursWorked * employeeRecord.payPerHour;
    return wagesEarned;
  }

  function allWagesFor(employeeRecord) {
    const datesWorked = employeeRecord.timeInEvents.map(event => event.date);
    const totalWages = datesWorked.reduce((acc, date) => acc + wagesEarnedOnDate(employeeRecord, date), 0);
    return totalWages;
  }

  function calculatePayroll(employeeRecords) {
    const totalWages = employeeRecords.reduce((acc, employee) => {
      return acc + allWagesFor(employee);
    }, 0);
    return totalWages;
  }
  
  
  
  
  
  