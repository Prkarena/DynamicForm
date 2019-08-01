1. npm init react-app nameofapp 

2. npm start

3. npm install react-router-dom --save

4.create folder structure 
    1. components 
        a)Account 
            1. Login
            2. SignUp
            3. ForgotPass
        b)FourOFour
        c)Home
    2. css 
        a) index.css

    3. DynamicForm
        a) dynamicform.js
        b) dynamicform.css

    4.index.js
    5.routes.js

5. Form Items :
    a) Input
    b) Label 
    c) Checkbox
    d) RadioButton
    e) Select 
    f) Datepicker
    g) Timepicker 
    h) TextArea 
    i) Button 
    j) Link 


    a) input :

        email:{
            element:'input',
            value:'',
            label:true,
            labelText:'Email',
            config:{
                name:'email_input',
                type:'text',
                placeholder:'Enter Your Email'
            }
        }

    b) label :
      
        label:{
            element:'label',
            label:'this is label',
        }

    c) Checkbox :





    d) RadioButton :





    e)select : 

         age :{
                element:'select',
                value:'',
                label:true,
                labelText:'Age',
                config:{
                  name:'age_input',
                  options:[
                      { val:'10', text:'10-20'},
                      { val:'20', text:'20-30'},
                      { val:'30', text:'+30'}
                  ]
                }
             }

    f) Datepicker



    g) Timepicker 



    h) textarea :

        address :{
                element:'textarea',
                value:'',
                label:true,
                labelText:'Address',
                config:{
                  name:'address_input',
                  rows:4,
                  cols:36
                }
        }

    i) button :
    
            1. submit :
                loginButton:{
                    element:'button',
                    value:'Login',
                    link:'',
                    config:{
                        variant:'contained',
                        color:'primary',
                        size:'small',
                        type:'submit',
                    }
                }

            2. button :
                signupButton:{
                    element:'button',
                    value:'Sign-up',
                    link:'/signup',
                    config:{
                        variant:'contained',
                        color:'primary',
                        size:'small',
                        type:'button',
                    }
                }


    j) link :

        forgotpassword:{
                element:'link',
                link:'/forgotpassword',
                label:'Forgot Password ?',
            }

    
  



    
