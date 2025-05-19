document.addEventListener("DOMContentLoaded", () => {
    const popUps = document.querySelectorAll(".pop-up");

    popUps.forEach(popUp => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    popUp.classList.add("show1");
                    observer.unobserve(popUp);
                }
            });
        });

        observer.observe(popUp);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const popUps = document.querySelectorAll(".pop_up_img");

    popUps.forEach(popUp => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    popUp.classList.add("show");
                    observer.unobserve(popUp);
                }
            });
        });

        observer.observe(popUp);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const popUps = document.querySelectorAll(".pop_up_service");

    popUps.forEach(popUp => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    popUp.classList.add("slide_img");
                    observer.unobserve(popUp);
                }
            });
        });

        observer.observe(popUp);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const popUps = document.querySelectorAll(".topic_all");
  
    popUps.forEach(popUp => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            popUp.classList.add("topic_action");
           
          } else {
            popUp.classList.remove("topic_action"); // Consider removing this if you only want the animation to trigger once on entry
          }
        });
      });
  
      observer.observe(popUp);
    });
  });

