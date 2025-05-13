document.addEventListener('DOMContentLoaded', () => {
  // Hacer toggle del menú al hacer clic en el botón
  const botones = document.querySelectorAll('.boton');

  botones.forEach((boton) => {
    boton.addEventListener('click', (e) => {
      e.stopPropagation(); // evita que el click cierre el menú justo después
      const menuId = boton.getAttribute('data-menu');
      const menu = document.getElementById(menuId);
      if (menu) {
        const estaVisible = menu.style.display === 'block';
        menu.style.display = estaVisible ? 'none' : 'block';
      }
    });
  });

  // Cierra todos los menús si haces clic fuera
  document.addEventListener('click', () => {
    const menus = document.querySelectorAll('.despliegue');
    menus.forEach(menu => {
      menu.style.display = 'none';
    });
  });

  // Impide que hacer clic dentro del menú lo cierre
  const menus = document.querySelectorAll('.despliegue');
  menus.forEach(menu => {
    menu.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });

  // RESALTAR tarjeta solo si haces clic en el menú (no al cargar con hash)
  const enlaces = document.querySelectorAll('.despliegue a');
  enlaces.forEach((enlace) => {
    enlace.addEventListener('click', (e) => {
      const hash = enlace.getAttribute('href'); // por ejemplo: #sapereAude
      const tarjeta = document.querySelector(hash);

      if (tarjeta) {
        // Quitar resaltado anterior
        document.querySelectorAll('.tarjeta.activa').forEach((t) => {
          t.classList.remove('activa', 'parpadeo-suave');
        });

        // Resaltar y hacer scroll
        tarjeta.classList.add('activa', 'parpadeo-suave');
        tarjeta.scrollIntoView({ behavior: 'smooth' });

        setTimeout(() => {
          tarjeta.classList.remove('activa', 'parpadeo-suave');
        }, 5000);
      }

      // Cerrar menú después de hacer clic
      const menuPadre = enlace.closest('.despliegue');
      if (menuPadre) {
        menuPadre.style.display = 'none';
      }
    });
  });
});

//JS tarjetas de manera individual
document.addEventListener('DOMContentLoaded', () => {
  const comics = document.querySelectorAll('.comic');
  let indiceActual = 0;

  comics.forEach((comic, index) => {
    if (index !== 0) {
      comic.style.display = 'none';
    }

    const boton = comic.querySelector('.boton-flecha');
    if (boton) {
      boton.addEventListener('click', () => {
        // Oculta el actual
        comics[indiceActual].style.display = 'none';
        // Muestra el siguiente
        indiceActual++;
        if (indiceActual < comics.length) {
          comics[indiceActual].style.display = 'block';
        }
      });
    }
  });
});


//EN CONTACTO MI CV NO SE DESCARGA ASI QUE USO ESTE JS
document.querySelector('.boton-descarga').addEventListener('click', (e) => {
  e.preventDefault();
  const enlace = document.createElement('a');
  enlace.href = '/CV_SIRA_ESONO_PIPA.pdf';
  enlace.download = 'CV_SIRA_ESONO_PIPA.pdf';
  document.body.appendChild(enlace);
  enlace.click();
  document.body.removeChild(enlace);
});




  
  



  
