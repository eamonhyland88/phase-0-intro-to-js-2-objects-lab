// Write your solution in this file!
const employee = {
    name: "Eamon",
    streetAddress: "123 Prep St.",
}

function updateEmployeeWithKeyAndValue(Object, Key, Value) {
    const employee = {...Object};
    employee[Key] = Value;
    return employee
}

function destructivelyUpdateEmployeeWithKeyAndValue(Object, Key, Value) {
    Object[Key] = Value;

    return Object;

}

function deleteFromEmployeeByKey(Object, Key) {
const employee = {...Object};
delete employee[Key];
return employee;
}

function destructivelyDeleteFromEmployeeByKey(employee, Key) {
    delete employee[Key];
    return employee;
}
