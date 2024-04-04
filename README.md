### **Requirements**
- dotnet 7.0
- Npm
- dotnet-ef (`dotnet tool install --global dotnet-ef`)

### Install dependencies
Run from RegisterTestApp.UI\ClientApp: `npm install`

### Configure database
Run from RegisterTestApp.BL directory: `dotnet ef database update`

### **Running the app**
Run from RegisterTestApp.UI  directory: `dotnet run` or run this project from 
Navigate to https://localhost:7091 

# Task
We would like you to implement the following feature:
- Add a field 'Date of Birth'. It should be displayed as a date component, and the value should be saved to the database.
- If a user enters a date < 18 years from now (if the user's age < 18 years) - do not allow to save the form and display the message 'You should be at least 18 years old to use this app'.
- Add a phone number mask, so the value should be autoformatted as (xxx) xxx-xx-xx .

Cases that are not directly described (which date control to use, how to display validation message, etc.) are up to the developers to decide.