<!Doctype html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="Lokesh">

    <title>React Tutorial</title>

    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity=""sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin=""anonymous">

    <link type="stylesheet" href="demo.css"></link>

   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js" integrity="sha512-/DXTXr6nQodMUiq+IUJYCt2PPOUjrHJ9wFrqpJ3XkgPNOZVfMok7cRw6CSxyCQxXn6ozlESsSh1/sMCTF1rL/g==" crossorigin="anonymous"></script>
   
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/create-react-class/15.7.0/create-react-class.min.js" integrity="sha512-iUrVckbmgrTPvnzV5Ajc1rONBq9N5PNCWZHiZ2/cLvFzLL0ZkDEEGYh4rnfeEqGZbePn2jpGf7ImvdqPRhj67A==" crossorigin="anonymous"></script>
   
    <script src="https://unpkg.com/react-dom-factories@1.0.0/index.js"></script>
    <!-- Don’t use this in production: -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <script src="demo.js" type="text/javascript"></script>
  </head>

  <body>
    
    <div id="root"></div>
    <script type="text/babel">


     
 
        var Message = createReactClass({
            render : function () {
                return (
                    <div >
                        <h1>Title</h1>
                        <Message.hr />
                        <Message.Content />
                    </div>
                )
            }

        });
        
        // hr  ---> child-component
        Message.hr = createReactClass({  
            render : function () {
                return (
                    <hr></hr>
                )
            }
         });
 
        // content --> child-component
        Message.Content = createReactClass({ 

           getData : () => {
           
           return alert("Worked");
        },
         
            render : function () {
                return (
                  <div>
                    <button onClick={this.getData}>Click here</button>
                    <p>My JSON Server</p>
                    </div>
                   
                )
            }
         });
        
    //  root container
      var Container = createReactClass({

        handleClick(event) {
          
          
  },
        render: function () {
          
          return (
            <div className="container pd-5;color:blue;border-radius:5px">
             <Message />
            </div>
          );
        },
      });
      ReactDOM.render(<Container/>, document.getElementById("root"));
    </script>
  </body>
</html>
