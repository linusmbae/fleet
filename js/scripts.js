$(document).ready(function()
{
  $("#displayDrivers").empty();
$("#displayDrivers").append(
                        "<div>"+
                              "<div class='row' id='driveRow'>"+
                              "<br><table cellpadding='15' class='table table-bordered'>"+
                                  "<tr>"+
                                    "<th>Name</th>"+
                                    "<th>Email</th>"+
                                    "<th>Phone</th>"+
                                    "<th>Licence</th>"+
                                    "<th>Validity</th>"+
                                  "</tr>"+
                                  "<tr>"+
                                      "<td>"+localStorage.FirstName+" "+localStorage.LastName+"</td>"+
                                      "<td>"+localStorage.Email+"</td>"+
                                      "<td>"+localStorage.Phone+"</td>"+
                                      "<td>"+localStorage.Licence+"</td>"+
                                      "<td>"+localStorage.Valid+"</td>"+
                                  "</tr>"+
                              "</table>"+
                              "</div>"+
                        "</div>"
                      );

  $("#displayVehicles").empty();
  $("#displayVehicles").append(
                          "<div>"+
                                "<div class='row' id='driveRow'>"+
                                    "<br><table cellpadding='15' class='table table-bordered'>"+
                                        "<tr>"+
                                          "<th>Name</th>"+
                                          "<th>Model</th>"+
                                          "<th>Registration Number</th>"+
                                          "<th>Category</th>"+
                                          "<th>Color</th>"+
                                          "<th>Capacity</th>"+
                                        "</tr>"+
                                        "<tr>"+
                                            "<td>"+localStorage.carName+"</td>"+
                                            "<td>"+localStorage.carModel+"</td>"+
                                            "<td>"+localStorage.regNo+"</td>"+
                                            "<td>"+localStorage.category+"</td>"+
                                            "<td>"+localStorage.color+"</td>"+
                                            "<td>"+localStorage.capacity+"</td>"+
                                        "</tr>"+
                                    "</table>"+
                                "</div>"+
                          "</div>"
                        );

$("#displayAssignments").empty();
$("#displayAssignments").append(
                        "<div>"+
                              "<div class='row' id='driveRow'>"+
                                  "<br><table cellpadding='15' class='table table-bordered'>"+
                                      "<tr>"+
                                        "<th>Vehicle Name</th>"+
                                        "<th>Driver Name</th>"+
                                        "<th>Start Date</th>"+
                                        "<th>End Date</th>"+
                                      "</tr>"+
                                      "<tr>"+
                                          "<td>"+localStorage.assignVehicleName+"</td>"+
                                          "<td>"+localStorage.assignDriverName+"</td>"+
                                          "<td>"+localStorage.assignStart+"</td>"+
                                          "<td>"+localStorage.assignEnd+"</td>"+
                                      "</tr>"+
                                  "</table>"+
                              "</div>"+
                        "</div>"
                      );


  $("#driverManager").click(function()
  {
    $("#drivers").empty();
    $("#drivers").append(
                            "<div>"+
                            "<button class='btn-primary' id='addDriver'>Add Driver</button>"+
                                "<h3 id='heading'>Driver List</h3>"+
                                "<div class='search-container'>"+
                                  "<form id='search' action='#'>"+
                                    "<input type='text' placeholder='Search..' name='search'>"+
                                    "<button type='submit'><i class='fa fa-search'></i></button>"+
                                  "</form>"+
                                  "<div class='row' id='driveRow'>"+
                                  "<br><table cellpadding='15' class='table table-bordered'>"+
                                      "<tr>"+
                                        "<th>FirstName</th>"+
                                        "<th>LastName</th>"+
                                        "<th>Email</th>"+
                                        "<th>Password</th>"+
                                        "<th>Phone</th>"+
                                        "<th>Licence</th>"+
                                        "<th>Validity</th>"+
                                      "</tr>"+
                                      "<tr>"+
                                          "<td>"+localStorage.FirstName+"</td>"+
                                          "<td>"+localStorage.LastName+"</td>"+
                                          "<td>"+localStorage.Email+"</td>"+
                                          "<td>"+localStorage.Password+"</td>"+
                                          "<td>"+localStorage.Phone+"</td>"+
                                          "<td>"+localStorage.Licence+"</td>"+
                                          "<td>"+localStorage.Valid+"</td>"+
                                      "</tr>"+
                                  "</table>"+
                                  "</div>"+
                                "</div>"+
                            "</div>"
                          );
  $("#addDriver").click(function()
  {
    $("#drivers").empty();
    $("#drivers").prepend(
                              "<form class='jumbotron'>"+
                                  "<input id='fName' class='form-control' type='text' placeholder='First Name' name='' required><br><br>"+
                                  "<input id='lName' class='form-control' type='text' placeholder='Last Name' name='' required><br><br>"+
                                  "<input id='email' class='form-control' type='email' placeholder='Email' name='' required><br><br>"+
                                  "<input id='password' class='form-control' type='Password' placeholder='Password' name='' required><br><br>"+
                                  "<input id='phone' class='form-control' type='number' placeholder='Mobile' name='' required><br>"+
                                  "<input id='licence' class='form-control' type='text' placeholder='Licence No' name='' required><br><br>"+
                                  "<input id='valid' class='form-control' type='date' placeholder='Validity' name='' required><br>"+
                                  "<button type='submit' class='btn-secondary' id='back'>Back</button>"+
                                  "<br><br><button type='submit' class='btn-success' id='save'>Save</button>"+
                              "</form>"
                           );
$("#back").click(function()
{
  $("#drivers").empty();
  $("#drivers").append(
                          "<div>"+
                          "<button class='btn-primary' id='addDriver'>Add Driver</button>"+
                              "<h3 id='heading'>Driver List</h3>"+
                              "<div class='search-container'>"+
                                "<form id='search' action='localStorage'>"+
                                  "<input type='text' placeholder='Search..' name='search'>"+
                                  "<button type='submit'><i class='fa fa-search'></i></button>"+
                                "</form>"+
                                "<div class='row' id='driveRow'>"+
                                "<br><table cellpadding='15' class='table table-bordered'>"+
                                    "<tr>"+
                                      "<th>FirstName</th>"+
                                      "<th>LastName</th>"+
                                      "<th>Email</th>"+
                                      "<th>Password</th>"+
                                      "<th>Phone</th>"+
                                      "<th>Licence</th>"+
                                      "<th>Validity</th>"+
                                    "</tr>"+
                                    "<tr>"+
                                        "<td>"+localStorage.FirstName+"</td>"+
                                        "<td>"+localStorage.LastName+"</td>"+
                                        "<td>"+localStorage.Email+"</td>"+
                                        "<td>"+localStorage.Password+"</td>"+
                                        "<td>"+localStorage.Phone+"</td>"+
                                        "<td>"+localStorage.Licence+"</td>"+
                                        "<td>"+localStorage.Valid+"</td>"+
                                    "</tr>"+
                                "</table>"+
                                "</div>"+
                              "</div>"+
                          "</div>"
                        );
});
  $("#save").click(function()
  {
    let firstName=$("#fName").val();
    let lastName=$("#lName").val();
    let email=$("#email").val();
    let password=$("#password").val();
    let phone=$("#phone").val();
    let licence=$("#licence").val();
    let valid=$("#valid").val();
    localStorage.setItem("FirstName",firstName);
    localStorage.setItem("LastName",lastName);
    localStorage.setItem("Email",email);
    localStorage.setItem("Password",password);
    localStorage.setItem("Phone",phone);
    localStorage.setItem("Licence",licence);
    localStorage.setItem("Valid",valid);
    alert("Driver "+firstName+" "+lastName+" Added Successful");
    $("#drivers").empty();
    $("#drivers").prepend(
                            "<div class='container'>"+
                            "<button class='btn-primary' id='addDriver'>Add Driver</button>"+
                                "<h3 id='heading'>Driver List</h3>"+
                                "<div class='search-container'>"+
                                  "<form id='search' action='localStorage'>"+
                                    "<input type='text' placeholder='Search..' name='search'>"+
                                    "<button type='submit'><i class='fa fa-search'></i></button>"+
                                  "</form>"+
                                  "<div class='row' id='driveRow'>"+
                                  "<br><table cellpadding='15' class='table table-bordered'>"+
                                      "<tr>"+
                                        "<th>FirstName</th>"+
                                        "<th>LastName</th>"+
                                        "<th>Email</th>"+
                                        "<th>Password</th>"+
                                        "<th>Phone</th>"+
                                        "<th>Licence</th>"+
                                        "<th>Validity</th>"+
                                      "</tr>"+
                                      "<tr>"+
                                          "<td>"+localStorage.FirstName+"</td>"+
                                          "<td>"+localStorage.LastName+"</td>"+
                                          "<td>"+localStorage.Email+"</td>"+
                                          "<td>"+localStorage.Password+"</td>"+
                                          "<td>"+localStorage.Phone+"</td>"+
                                          "<td>"+localStorage.Licence+"</td>"+
                                          "<td>"+localStorage.Valid+"</td>"+
                                      "</tr>"+
                                  "</table>"+
                                  "</div>"+
                                "</div>"+
                            "</div>"
                          );

  });
  });
  });


  // vehicleManager start
$("#vehicleManager").click(function()
{
  $("#drivers").empty();
  $("#drivers").append(
                          "<div>"+
                          "<button class='btn-primary' id='addVehicle'>Add Vehicle</button>"+
                              "<h3 id='heading'>Vehicle List</h3>"+
                              "<div class='search-container'>"+
                                "<form id='search' action='localStorage'>"+
                                  "<input type='text' placeholder='Search..' name='search'>"+
                                  "<button type='submit'><i class='fa fa-search'></i></button>"+
                                "</form>"+
                                "<div class='row' id='driveRow'>"+
                                    "<br><table cellpadding='15' class='table table-bordered'>"+
                                        "<tr>"+
                                          "<th>Vehicle Name</th>"+
                                          "<th>Model</th>"+
                                          "<th>Registration Number</th>"+
                                          "<th>Category</th>"+
                                          "<th>Color</th>"+
                                          "<th>Capacity</th>"+
                                        "</tr>"+
                                        "<tr>"+
                                        "<td>"+localStorage.carName+"</td>"+
                                        "<td>"+localStorage.carModel+"</td>"+
                                        "<td>"+localStorage.regNo+"</td>"+
                                        "<td>"+localStorage.category+"</td>"+
                                        "<td>"+localStorage.color+"</td>"+
                                        "<td>"+localStorage.capacity+"</td>"+
                                        "</tr>"+
                                    "</table>"+
                                "</div>"+
                              "</div>"+
                          "</div>"
                        );


$("#addVehicle").click(function()
{
  $("#drivers").empty();
  $("#drivers").prepend(
                        "<form class='jumbotron'>"+
                            "<input id='vName' class='form-control' type='text' placeholder='Vehicle Name' name='' required><br><br>"+
                            "<input id='model' class='form-control' type='text' placeholder='Model' name='' required><br><br>"+
                            "<input id='reg' class='form-control' type='text' placeholder='Registration Number' name='' required><br><br>"+
                            "<input id='cat' class='form-control' type='text' placeholder='Category' name='' required><br><br>"+
                            "<input id='color' class='form-control' type='text' placeholder='Color' name='' required><br>"+
                            "<input id='capacity' class='form-control' type='number' placeholder='Capacity in Seats or Tones for Loading' name='' required><br>"+
                            "<button type='submit' class='btn-secondary' id='backVehicle'>Back</button>"+
                            "<br><br><button type='submit' class='btn-success' id='saveVehicle'>Save</button>"+
                        "</form>"
                        );
$("#backVehicle").click(function()
{
  $("#drivers").empty();
  $("#drivers").append(
                          "<div>"+
                          "<button class='btn-primary' id='addVehicle'>Add Vehicle</button>"+
                              "<h3 id='heading'>Vehicle List</h3>"+
                              "<div class='search-container'>"+
                                "<form id='search' action='localStorage.carName'>"+
                                  "<input type='text' placeholder='Search..' name='search'>"+
                                  "<button type='submit'><i class='fa fa-search'></i></button>"+
                                "</form>"+
                                "<div class='row' id='driveRow'>"+
                                    "<br><table cellpadding='15' class='table table-bordered'>"+
                                        "<tr>"+
                                          "<th>Vehicle Name</th>"+
                                          "<th>Model</th>"+
                                          "<th>Registration Number</th>"+
                                          "<th>Category</th>"+
                                          "<th>Color</th>"+
                                          "<th>Capacity</th>"+
                                        "</tr>"+
                                        "<tr>"+
                                        "<td>"+localStorage.carName+"</td>"+
                                        "<td>"+localStorage.carModel+"</td>"+
                                        "<td>"+localStorage.regNo+"</td>"+
                                        "<td>"+localStorage.category+"</td>"+
                                        "<td>"+localStorage.color+"</td>"+
                                        "<td>"+localStorage.capacity+"</td>"+
                                        "</tr>"+
                                    "</table>"+
                                "</div>"+
                              "</div>"+
                          "</div>"
                        );

});
$("#saveVehicle").click(function()
{
  var cName=$("#vName").val();
  var model=$("#model").val();
  var regNo=$("#reg").val();
  var category=$("#cat").val();
  var color=$("#color").val();
  var capacity=$("#capacity").val();
  localStorage.setItem("carName",cName);
  localStorage.setItem("carModel",model);
  localStorage.setItem("regNo",regNo);
  localStorage.setItem("category",category);
  localStorage.setItem("color",color);
  localStorage.setItem("capacity",capacity);
  alert("you added "+cName+" model "+model+" Successful");
  $("#drivers").empty();
  $("#drivers").append(
                          "<div>"+
                          "<button class='btn-primary' id='addVehicle'>Add Vehicle</button>"+
                              "<h3 id='heading'>Vehicle List</h3>"+
                              "<div class='search-container'>"+
                                "<form id='search' action='localStorage.carName'>"+
                                  "<input type='text' placeholder='Search..' name='search'>"+
                                  "<button type='submit'><i class='fa fa-search'></i></button>"+
                                "</form>"+
                                "<div class='row' id='driveRow'>"+
                                    "<br><table cellpadding='15' class='table table-bordered'>"+
                                        "<tr>"+
                                          "<th>Vehicle Name</th>"+
                                          "<th>Model</th>"+
                                          "<th>Registration Number</th>"+
                                          "<th>Category</th>"+
                                          "<th>Color</th>"+
                                          "<th>Capacity</th>"+
                                        "</tr>"+
                                        "<tr>"+
                                            "<td>"+localStorage.carName+"</td>"+
                                            "<td>"+localStorage.carModel+"</td>"+
                                            "<td>"+localStorage.regNo+"</td>"+
                                            "<td>"+localStorage.category+"</td>"+
                                            "<td>"+localStorage.color+"</td>"+
                                            "<td>"+localStorage.capacity+"</td>"+
                                        "</tr>"+
                                    "</table>"+
                                "</div>"+
                              "</div>"+
                          "</div>"
                        );
});
});

  // vehicleManager ends

});
// vehicle Assignment start
$("#vehicleAssignment").click(function()
{
$("#drivers").empty();
$("#drivers").append(
        "<div class='row'>"+
          "<h2 id='pxLeft'>Assign</h2>"+
            "<form class='col-md-4'>"+
                "<lable id='pxLeft1'>Vehicle</lable><br>"+
                "<select>"+
                    "<option id='opCarName'>"+localStorage.carName+"</option>"+
                "</select><br><br>"+
                "<lable id='pxLeft1'>Driver</lable><br>"+
                "<select>"+
                    "<option id='opDriverName'>"+localStorage.FirstName+" "+localStorage.LastName+"</option>"+
                "</select><br><br>"+
                "<lable id='pxLeft1'>start Time</lable>"+
                "<input id='start' class='form-control' type='date'><br>"+
                "<lable id='pxLeft1'>End Time</lable>"+
                "<input id='end' class='form-control' type='date'>"+
                "<br><br><button type='submit' class='btn-secondary' id='bac'>Back</button><button type='submit' class='btn-success' id='sav'>Save</button>"+
            "<form>"+
        "</div>"
      );
$("#sav").click(function()
{
 let opVehicle=$("#opCarName").val();
 let opDriver=$("#opDriverName").val();
 let starting=$("#start").val();
 let ending=$("#end").val();
 localStorage.setItem("assignVehicleName",opVehicle);
 localStorage.setItem("assignDriverName",opDriver);
 localStorage.setItem("assignStart",starting);
 localStorage.setItem("assignEnd",ending);
 alert("you assigned "+opVehicle+" to "+opDriver+" Successful");
});
$("#bac").click(function()
{
  $(".jumbotron").show();
});
});
// vehicle Assignment ends
});
