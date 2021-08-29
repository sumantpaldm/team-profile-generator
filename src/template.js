const mainHtml = (team) => {
  const html = [];




  const createManager = (manager) => {
    const { name, id, email, officeNmb } = manager;
    let mgr = `     
            <div class="card m-4 col-sm-6" style="width: 18rem;">
                <div class="card-header bg-primary text-white  text-center">
                  <span class="fs-3 text-center">${name.toUpperCase()}<span> <br/>
                 ${manager.getRole()}</span>
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <span id="email"><a href="mailto:${email}">${email}</a></span></li>
                    <li class="list-group-item">Office Number: ${officeNmb}</li>
                  </ul>
                </div>
            </div>
        `;


    html.push(mgr);
  };




  const createEngineer = (engineer) => {
    const { name, id, email, username } = engineer;
    let eng = ` 
            <div class="card m-4 col-sm-6" style="width: 18rem;">
                <div class="card-header bg-primary text-white  text-center">
                  <span class="fs-3 text-center">${name.toUpperCase()}<span> <br/>
                  ${engineer.getRole()}</span>
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <span id="email"><a href="mailto:${email}">${email}</a></span></li>
                    <li class="list-group-item">Github: <a target="_blank" href="https://github.com/${username}">${username}</a></li>
                  </ul>
                </div>
            </div>
        `;


    html.push(eng);
  };





  const createIntern = (student) => {
    const { name, id, email, school } = student;
    let intern = `  
            <div class="card m-4 col-sm-6" style="width: 18rem;">
                <div class="card-header bg-primary text-white  text-center">
                <span class="fs-3 text-center">${name.toUpperCase()}<span> <br/>
                ${student.getRole()}</span>
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <span id="email"><a href="mailto:${email}">${email}</a></span></li>
                    <li class="list-group-item">School: ${school}</li>
                  </ul>
                </div>
            </div>        
        `;




    html.push(intern);
  };

  html.push(
    team
      .filter((item) => item.getRole() === "Manager")
      .map((manager) => createManager(manager))
      .join("")
  );





  html.push(
    team
      .filter((item) => item.getRole() === "Engineer")
      .map((engineer) => createEngineer(engineer))
      .join("")
  );




  html.push(
    team
      .filter((item) => item.getRole() === "Intern")
      .map((intern) => createIntern(intern))
      .join("")
  );

  return html.join("");
};

module.exports = (team) => {
  return `
      <!DOCTYPE html>
      <html lang="en">
      
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
      </head>
      
      <body>
        <header>
          <div class="container flex-row justify-space-between align-center py-3">
           
            <nav class="flex-center  text-center">        
              <h1 class="bg-danger text-white">My Team</h1>
            </nav>
          </div>
        </header>
        <div class="container">
          <div class="d-flex justify-content-center flex-sm-wrap">
            ${mainHtml(team)}
          </div>
        </div>
        
       
        <footer class="container text-center py-3">
          <h3 class="text-dark">&copy;2021 Team Profile</h3>
        </footer>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      </body>
      </html>
      `;
};