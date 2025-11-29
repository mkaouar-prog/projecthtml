function setupQuiz() {
    const quizForm = document.getElementById('quizForm');
    if (!quizForm) return;

   
    const answers = {
        q1: 'b', 
        q2: 'b', 
        q3: 'a', 
        q4: 'c', 
        q5: 'c',  
        q6: 'a',  
        q7: 'b', 
        q8: 'b',  
        q9: 'c',  
        q10: 'b', 
        q11: 'a', 
        q12: 'c', 
        q13: 'b', 
        q14: 'a',
        q15: 'c'  
    };

    quizForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let score = 0;
        const total = 15;

       
        for (let i = 1; i <= total; i++) {
            const questionName = 'q' + i;
            const selected = document.querySelector('input[name="' + questionName + '"]:checked');
            
            if (selected && selected.value === answers[questionName]) {
                score++;
            }
        }

        const resultDiv = document.getElementById('quizResult');
        if (resultDiv) {
            resultDiv.innerHTML = '<div class="alert alert-info"><strong>Résultat :</strong> Vous avez obtenu ' + score + ' / ' + total + ' (' + Math.round((score/total)*100) + '%)</div>';
            resultDiv.scrollIntoView({ behavior: 'smooth' });
        }
    });
}


function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        const mailtoLink = 'mailto:achrafmkaouar2002@gmail.com' +
            '?subject=' + encodeURIComponent(subject) +
            '&body=' + encodeURIComponent(
                'Nom: ' + name + '\n' +
                'Email: ' + email + '\n' +
                'Téléphone: ' + phone + '\n\n' +
                'Message:\n' + message
            );
        
        window.location.href = mailtoLink;
    });
}




//for load
document.addEventListener('DOMContentLoaded', function() {
    setupQuiz();
    setupContactForm();
});