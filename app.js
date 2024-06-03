// Turn pages when clicking next or prev button
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((btn, index) => {
    btn.onclick = () => {
        const pageTurnId = btn.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500);
        } else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500);
        }
    }
})

const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');


contactMeBtn.onclick = () => {
      pages.forEach((pages, index) => {
            setTimeout(() => {
                pages.classList.add('turn');

                  setTimeout(() => {
                    pages.style.zIndex = 20 + index;
                  },500)
            }, (index + 1) * 200 + 100)
      })
}

// create reverse index function
let totalPages = pages.length;
let pagesNumber = 0 ;
function reverseIndex() {
    pagesNumber--;
    if(pagesNumber < 0) {
        pagesNumber = totalPages - 1 ;

    }
}

//back profile button when click

const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
     pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pagesNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pagesNumber].style.zIndex = 10 + index;
            },500)

        }, (index + 1) * 200 + 100 )
     })
}
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

setTimeout(() => {
    coverRight.classList.add("turn");
},2100)


setTimeout(() => {
    coverRight.style.zIndex = -1;
},2000)

setTimeout(() => {
    pageLeft.style.zIndex = 20;
},3200)

pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
        pages[pagesNumber].classList.remove('turn');

        setTimeout(() => {
            reverseIndex();
            pages[pagesNumber].style.zIndex = 10 + index;
        },500)

    }, (index + 1) * 200 + 2100 )
 })

