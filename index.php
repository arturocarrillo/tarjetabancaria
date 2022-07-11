<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Tarjeta Bancaria</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato|Liu+Jian+Mao+Cao&display=swap">
  <link rel="stylesheet" href="./public/frontend/css/tarjeta.css">
</head>

<body>
  <div class="container">

    <!-- Card -->
    <section class="card " id="card">
      <div class="front bg-bank-0 bg-bank-1 bg-bank-2" id="front">
        <div class="logo-marca" id="logo-marca"></div>

        <img src="./public/frontend/img/chip-tarjeta.png" class="chip" alt="">

        <div class="data">
          <div class="group" id="number">
            <p class="label">Número tarjeta</p>
            <p class="number">#### #### #### ####</p>
          </div>
          <div class="flexbox">
            <div class="group" id="name">
              <p class="label">Nombre tarjeta</p>
              <p class="name">Juan Perez</p>
            </div>

            <div class="group" id="expiration">
              <p class="label">Expiración</p>
              <p class="expiration"><span class="mont">MM</span> / <span class="year">AA</span></p>
            </div>
          </div>
        </div>
      </div>

      <div class="back  bg-bank" id="back">
        <div class="bar-magnetic"></div>
        <div class="data">
          <div class="group" id="firma">
            <p class="label">Firma</p>
            <div class="firma">
              <p></p>
            </div>
          </div>
          <div class="group" id="ccv">
            <p class="label">CCV</p>
            <p class="ccv"></p>
          </div>

        </div>
        <p class="leyenda">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum laudantium quidem ipsam
          dolorem accusantium enim ad voluptas quod amet dolor.</p>
        <a href="#" class="link-banco">www.bank.com</a>
      </div>
    </section>

    <!-- add user -->
    <div class="container-btn">
      <button class="btn-open-form" id="btn-open-form">
        <i class="fas fa-plus"></i>
      </button>
    </div>

    <!-- form -->
    <form action="" id="form-card" class="form-card">
      <div class="group">
        <label for="inputNumber">Número Tarjeta</label>
        <input type="text" id="inputNumber" maxlength="19" autocomplete="off">
      </div>
      <div class="group">
        <label for="inputName">Nombre</label>
        <input type="text" id="inputName" maxlength="20" autocomplete="off">
      </div>
      <div class="flexbox">
        <div class="group expiration">
          <label for="selectMont">Expiración</label>
          <div class="flexbox">
            <div class="group-select">
              <select name="mont" id="selectMont">
                <option disabled selected>Mes</option>
              </select>
              <i class="fas fa-angle-down"></i>
            </div>
            <div class="group-select">
              <select name="year" id="selectYear">
                <option disabled selected>Año</option>
              </select>
              <i class="fas fa-angle-down"></i>
            </div>
          </div>
        </div>

        <div class="group ccv">
          <label for="inputCCV">CCV</label>
          <input type="text" id="inputCCV" maxlength="3">
        </div>
      </div>
      <button type="submit" class="btn-send">Enviar</button>
    </form>

  </div>
</body>
<script src="https://kit.fontawesome.com/2c36e9b7b1.js" crossorigin="anonymous"></script>
<script src="./public/frontend/js/main.js"></script>

</html>