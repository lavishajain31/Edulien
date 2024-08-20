import React, { useEffect } from 'react';

function SplashScreen() {
  useEffect(() => {
    const intro = document.querySelector('.intro');
    const logoSpan = document.querySelectorAll('.logoo');

    if (intro && logoSpan) {
      setTimeout(() => {
        logoSpan.forEach((span, idx) => {
          setTimeout(() => {
            span.classList.add('active');
          }, (idx + 1) * 400);
        });

        setTimeout(() => {
          logoSpan.forEach((span, idx) => {
            setTimeout(() => {
              span.classList.remove('active');
              span.classList.add('fade');
            }, (idx + 1) * 50);
          });
        }, 2000);

        setTimeout(() => {
          intro.style.top = '-100vh';
        }, 2300);
      }, 0);
    }
  }, []);

  return (
    <div className="intro fixed inset-0 w-full h-screen bg-[#2B2D42] transition-all duration-1000">
      <h1 className="absolute text-4xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#D9DCD6] font-pacifico">
        <span className="logoo relative inline-block opacity-0">Edu</span>
        <span className="logoo relative inline-block opacity-0">lien.</span><br/>
      </h1>
    </div>
  );
}

export default SplashScreen;
