(Please wait for loading if you are opening to this project because it is free hosting of website in glitch plateform)
<br />
DataBaseRelationShip
<br />
![DataBaseRelationShip](https://user-images.githubusercontent.com/68116883/208170063-0e3fd7de-f561-44b5-98a8-f2d70c84515c.jpg)

Building Blocks of the Project: HTML, CSS, JavaScript, Boostrap, NodeJS, ExpressJs, MongoDB and Dependencies(ejs, express, hbs, mongoose, path, popups, Validator)

![loginpage](https://user-images.githubusercontent.com/68116883/208151279-1cc96004-cf16-4457-b5fb-ccaf149ead8d.png)

login Page:
Front page is login page, where user will login, then <Collection>.find({}) method will search Is its entered values is present in database or not and if promise from 
searching will not succeed then it will render error page.

![registrationpage](https://user-images.githubusercontent.com/68116883/208151373-30ab304a-a70a-4097-9eba-f06f88b8f3f8.png)

Registration Page:
if any user is not registered then he can register himself from the link provided in front Page(login Page). Registration page contains proper validation and all those
conditions which are directed in assignment means no user beyond 18-65 can register here because date of birth range in date input attribute is before 18 years to 65 years 
from current year. Details entered in registration form are sending to database through post method and saving this data in database through making a Document and
<collection>.save(document) method.

![dashboard](https://user-images.githubusercontent.com/68116883/208151409-8391d4ef-743d-4bf6-bd00-9159c897205b.png)
 ***
  ![paymentunpaid](https://user-images.githubusercontent.com/68116883/208153832-2a56adc1-5462-4593-bb21-7b28c3bf0f28.png)
Dashboard:
After registration if anyone login with their valid credentials, then its entered information will go(by post method) for searching in database by <collection>.find({emailId:req.body.email})
and we are passing the obtained data from this searching to ejs file and then rendering(res.render("pageName",{data})) dashboard page template. In dashboard if user had not made payment then its
Payment will Show unPaid. In Dashboard page's Script tag a condition is present, if Payment Status Of user is Paid(i.e, Stored information Of DataBase) then Block Paynow Button and Show Paid Status and vice-versa.
Here Print Button is also there where user can print its Status of payment.

![payment](https://user-images.githubusercontent.com/68116883/208151440-abed2641-4df3-42b0-930a-3a10b25f5cce.png)

  

Payment Functionality:
If any User newly registered then its PaymentStatus is unPaid and lastPayment Details are also N/A. After Login with their Valid Credentials user can Pay. if user click
on Pay Now button then its emailId which is working as a primaryKey in DataBase will go(Send by Post Method) to paymentPage and  Some details of user will render in Payment Page collection.find() method
where user can Select its Batch and Bank Name and as soon as user press Done button then we will update Batch Details, PaymentStatus as Paid and LastPayment details as
currentmonth and year. But in assignment it is mentioned that user have to pay every month then a setInterval Function is set at the main.js(router) page whose interval is
about 22 hour and here there is a condition if current date is 1 then a function present in SetInterval will run and update PaymentStatus of users equal to unpaid whose
lastPayment month and lastpayment year will not equal to currentYear and currentMonth.
