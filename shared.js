var backdrop = document.querySelector('.backdrop'); /*ime var-a (backdrop) ne mora biti ime elementa ili selektora kojeg zelimo da pozovemo*/
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var noDugme = document.querySelector('.modal button');

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}

backdrop.addEventListener('click', function() {   /*ovo omogucava da se klikne bilo gde na stranici da bi se prozor 'yes no' uklonio'*/
        modal.style.display = 'none';
        backdrop.style.display = 'none';
    });

noDugme.addEventListener('click', function() {  /*ovo omogucava da se prozor 'yes no' ukloni kada se klikne na 'no'*/
        modal.style.display = 'none';
        backdrop.style.display = 'none';
    });






/*console.dir(backdrop);*/