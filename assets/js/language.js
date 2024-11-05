document.addEventListener('DOMContentLoaded', function () {
    const translateButtonPt = document.getElementById('translate-pt');
    const translateButtonEn = document.getElementById('translate-en');
    const dropdownContent = document.querySelector(".dropdown-content");
    const translateButton = document.getElementById("translate-button");

    const elementsToTranslate = {
        navLinks: {
            home: { pt: "Home", en: "Home" },
            about: { pt: "Sobre", en: "About" },
            projects: { pt: "Projetos", en: "Projects" },
            contact: { pt: "Contato", en: "Contact" },
            language: { 
                        pt: '<img src="/assets/images/br.png" alt="Bandeira do Brasil" class="flag-icon">', 
                        en: '<img src="/assets/images/uk.png" alt="Bandeira do Brasil" class="flag-icon">' 
                    }
        },
        header: {
            pt: "Olá,<br />me chamo Matheus <span>e sou Desenvolvedor Backend e Freelancer</span>",
            en: "Hi,<br />my name is Matheus <span>and I am a Backend Developer and Freelancer</span>"
        },
        aboutTitle: {
            pt: "SOBRE",
            en: "ABOUT"
        },
        aboutHeader: {
            pt: "Quem eu sou",
            en: "Who I am"
        },
        aboutContent: {
            pt: "Apenas um desenvolvedor apaixonado por tecnologia, sempre buscando aprender novos conceitos para me tornar um profissional cada vez melhor. Atualmente, estou cursando Engenharia de Software, o que me permite aprofundar ainda mais meus conhecimentos e habilidades na área. Nos últimos dois anos, venho desenvolvendo diversos projetos para aplicar o que aprendo tanto na faculdade quanto em meus estudos pessoais. Tenho grande facilidade em me adaptar a novas mudanças e estou sempre pronto para enfrentar novos desafios.",
            en: "I am a developer passionate about technology, always seeking to learn new concepts to become an even better professional. I am currently studying Software Engineering, which allows me to further deepen my knowledge and skills in the field. Over the past two years, I have developed several projects to apply what I learn both at college and in my personal studies. I am highly adaptable to new changes and always ready to take on new challenges."
          },
        skill__container: {
            pt: "HABILIDADES",
            en: "SKILLS"
        },
        aboutLink: {
            pt: "VOCÊ PODE VER TODOS OS MEUS PROJETOS AQUI!",
            en: "YOU CAN SEE ALL MY PROJECTS HERE!"
        },
        project__container: {
            pt: "PRINCIPAIS PROJETOS",
            en: "MAIN PROJECTS"
        },
        contactText: {
            pt: "Me mande uma mensagem! Seja se você tiver um projeto em mente ou uma pergunta sobre o meu trabalho, fique à vontade para entrar em contato. Você pode me contatar por e-mail ou através das minhas redes sociais. Estou sempre animado para colaborar com pessoas que compartilham dos mesmos interesses e explorar novas oportunidades.",
            en: "Send me a message! Whether you have a project in mind or a question about my work, feel free to get in touch. You can contact me by email or through my social media. I am always excited to collaborate with people who share the same interests and explore new opportunities."
        },
        footer__container: {
            pt: "Contato",
            en: "Contact"
        },
        formLabels: {
            name: { pt: "Nome", en: "Name" },
            email: { pt: "Contato", en: "Contact" },
            subject: { pt: "Assunto", en: "Subject" },
            message: { pt: "Mensagem", en: "Message" }
        },
        formPlaceholders: {
            name: { pt: "Seu nome", en: "Your name" },
            email: { pt: "Seu email", en: "Your email" },
            subject: { pt: "Assunto", en: "Subject" },
            message: { pt: "Mensagem", en: "Message" }
        },
        formButton: {
            pt: "Enviar",
            en: "Send"
        },
        projects: {
            barbershopTitle: { pt: "Barbershop - API REST", en: "Barbershop - REST API" },
            barbershopDesc: { pt: "Sistema de Agendamento para Barbearias", en: "Booking System for Barbershops" },
            discordAppTitle: { pt: "Laravel Discord APP", en: "Laravel Discord APP" },
            discordAppDesc: { pt: "Aplicação de Chat em Tempo Real", en: "Real-Time Chat Application" },
            postsApiTitle: { pt: "Posts API REST", en: "Posts REST API" },
            postsApiDesc: { pt: "API REST para Gerenciamento de Contas, Postagens e Comentários com Sistema de Notificações", en: "REST API for Account, Post, and Comment Management with Notification System" },
            notesAppTitle: { pt: "NotesApp - Fullstack", en: "NotesApp - Fullstack" },
            notesAppDesc: { pt: "Aplicação FullStack para Gerenciamento de Notas", en: "FullStack Application for Notes Management" },
        },
    };

    function translateContent(language) {
        document.querySelector('header h1').innerHTML = elementsToTranslate.header[language];
        document.getElementById('about').querySelector('h2').textContent = elementsToTranslate.aboutTitle[language];
        document.querySelector('.experience__header h4').textContent = elementsToTranslate.aboutHeader[language];
        document.querySelector('.skill__container h2').textContent = elementsToTranslate.skill__container[language];
        document.querySelector('.project__container h2').textContent = elementsToTranslate.project__container[language];
        document.querySelector('.experience__list p').textContent = elementsToTranslate.aboutContent[language];
        document.querySelector('.link-projects').textContent = elementsToTranslate.aboutLink[language];
        document.querySelector('.contact__text p').textContent = elementsToTranslate.contactText[language];
        document.querySelector('.footer__container h2').textContent = elementsToTranslate.footer__container[language];
        document.querySelector('.contact__form .btn').textContent = elementsToTranslate.formButton[language];

        const navItems = document.querySelectorAll('.nav__links li a');
        navItems[0].textContent = elementsToTranslate.navLinks.home[language];
        navItems[1].textContent = elementsToTranslate.navLinks.about[language];
        navItems[2].textContent = elementsToTranslate.navLinks.projects[language];
        navItems[3].textContent = elementsToTranslate.navLinks.contact[language];
        navItems[4].innerHTML = elementsToTranslate.navLinks.language[language];

        document.querySelector('label[for="name"]').textContent = elementsToTranslate.formLabels.name[language];
        document.querySelector('input#name').placeholder = elementsToTranslate.formPlaceholders.name[language];

        document.querySelector('label[for="email"]').textContent = elementsToTranslate.formLabels.email[language];
        document.querySelector('input#email').placeholder = elementsToTranslate.formPlaceholders.email[language];

        document.querySelector('label[for="subject"]').textContent = elementsToTranslate.formLabels.subject[language];
        document.querySelector('input#subject').placeholder = elementsToTranslate.formPlaceholders.subject[language];

        document.querySelector('label[for="message"]').textContent = elementsToTranslate.formLabels.message[language];
        document.querySelector('textarea#message').placeholder = elementsToTranslate.formPlaceholders.message[language];

        document.getElementById('barbershop-title').textContent = elementsToTranslate.projects.barbershopTitle[language];
        document.getElementById('barbershop-desc').textContent = elementsToTranslate.projects.barbershopDesc[language];
        document.getElementById('discordapp-title').textContent = elementsToTranslate.projects.discordAppTitle[language];
        document.getElementById('discordapp-desc').textContent = elementsToTranslate.projects.discordAppDesc[language];
        document.getElementById('postsapi-title').textContent = elementsToTranslate.projects.postsApiTitle[language];
        document.getElementById('postsapi-desc').textContent = elementsToTranslate.projects.postsApiDesc[language];
        document.getElementById('notesapp-title').textContent = elementsToTranslate.projects.notesAppTitle[language];
        document.getElementById('notesapp-desc').textContent = elementsToTranslate.projects.notesAppDesc[language];

    }

    function toggleDropdown(event) {
        event.stopPropagation();
        dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    }

    function closeDropdown(event) {
        if (!event.target.closest(".dropdown")) {
            dropdownContent.style.display = "none";
        }
    }

    function handleLanguageChange(language) {
        translateContent(language);
        dropdownContent.style.display = "none";
    }

    translateButtonEn.addEventListener("click", function (event) {
        event.preventDefault();
        handleLanguageChange('en');
    });

    translateButtonPt.addEventListener("click", function (event) {
        event.preventDefault();
        handleLanguageChange('pt');
    });

    translateButton.addEventListener("click", toggleDropdown);
    document.addEventListener("click", closeDropdown);
});
