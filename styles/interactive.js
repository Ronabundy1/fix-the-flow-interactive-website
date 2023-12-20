

    document.addEventListener
        const probleemButton = document.getElementById('probleemButton');
        const oplossingButton = document.getElementById('oplossingButton');
        const probleemSection = document.querySelector('.probleem_section');
        const oplossingSection = document.querySelector('.oplossing_section');

        probleemButton.addEventListener('click', function() {
            probleemSection.classList.remove('hidden');
            oplossingSection.classList.add('hidden');
        });

        oplossingButton.addEventListener('click', function() {
            probleemSection.classList.add('hidden');
            oplossingSection.classList.remove('hidden');
        });
    ;

    

