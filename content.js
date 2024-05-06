//écoute les messages envoyés depuis d'autres parties de l'extension, comme le popup.
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) { 

    //vérifie si le message indique que l'extension doit être activée.
    if (message.enabled == true) { 


        const regex = /(\[(.*?)\])|([.\u00B7]*?)/g
        const attributeToSearch = `h1,h2,h3,h4,h5,p,b,i,a,span,caption`
        
        // Activer votre extension
function querySelectorAllRegex(regex, attributeToSearch) {
    const txt = [];
    if (attributeToSearch) {
      for (let element of document.querySelectorAll(`${attributeToSearch}`)) {
        if (regex.test(element.getAttribute(attributeToSearch))) {
          txt.push(element);
        }
      }
    } else {
      for (let element of document.querySelectorAll('*')) {
        for (let attribute of element.attributes) {
          if (regex.test(attribute.value)) {
            txt.push(element);
                }
            }
        }
        }
        return txt;
    }

    //sélectionne tout les éléments de texte sur le site.
let text = querySelectorAllRegex(regex, attributeToSearch);
        //dico
        const dictionary = { 
       
    const dictionary = { 
            Absent : "Absent·e",
            absent :"absent·e",
            Absents :"Absent·es",
            absents :"absent·es",
            acteur :"acteur·rice",
            Acteur :"Acteur·rice",
            acteurs :"acteur·rices",
            acteurs :"acteur·rices",
            Adhérent :"Adhérent·e",
            Adhérents :"Adhérent·es",
            adhérent :"adhérent·e",
            Adjoints :"Adjoint·es",
            Adjoint :"Adjoint·e",
            adjoint :"adjoint·e",
            adjoints :"adjoint·es",
            Administrateur :"Administrateur·trice",
            Administrateurs :"Administrateur·trices",
            administrateur :"administrateur·trice",
            administrateurs :"administrateur·trices",
            Adroit :"Adroit·e",
            Adroits :"Adroit·es",
            adroit :"adroit·e",
            adroits :"adroit·es",
            Agé :"Agé·e",
            Agés :"Agé·es",
            agé :"agé·e",
            agés :"agé·es",
            Âgé :"Âgé·e",
            Âgés :"Âgé·es",
            âgé :"âgé·e",
            âgés :"âgé·es",
            Agent :"Agent·e",
            Agents :"Agent·es",
            agent :"agent·e",
            agents :"agent·es",
            Ambassadeur :"Ambassadeur·rice",
            Ambassadeurs :"Ambassadeur·rices",
            ambassadeur :"ambassadeur·rice",
            ambassadeurs :"ambassadeur·rices",
            Ami :"Ami·e",
            Amis :"Ami·es",
            ami :"ami·e",
            amis :"ami·es",
            Amoureux :"Amoureux·se",
            Amoureux :"Amoureux·ses",
            amoureux :"amoureux·se",
            amoureux :"amoureux·ses",
            Analyste :"Analyste",
            Analystes :"Analystes",
            analyste :"analyste",
            analystes :"analystes",
            Ancien :"Ancien·ne",
            Anciens :"Ancien·nes",
            ancien :"ancien·ne",
            anciens :"ancien·nes",
            Apprenant :"Apprenant·e",
            Apprenants :"Apprenant·es",
            apprenant :"apprenant·e",
            apprenants :"apprenant·es",
            Apprenti :"Apprenti·e",
            Apprentis :"Apprenti·es",
            apprenti :"apprenti·e",
            apprentis :"apprenti·es",
            Architecte:"Architecte·sse",
            Architectes :"Architecte·sses",
            architecte :"architecte·sse",
            architectes :"architecte·sses",
            Artiste:"Artiste",
            Artistes :"Artistes",
            artiste :"artiste",
            artistes :"artistes",
            Assistant :"Assistant·e",
            Assistants :"Assistant·es",
            assistant :"assistant·e",
            assistants :"assistant·es",
            Attentif :"Attentif·ve",
            Attentifs :"Attentif·ves",
            attentif :"attentif·ve",
            attentifs :"attentif·ves",
            Audacieux :"Audacieux·se",
            Audacieux :"Audacieux·ses",
            audacieux :"audacieux·se",
            Audacieux :"audacieux·ses",
            Auteur :"Auteur·rice",
            Auteurs :"Auteur·rices",
            auteur :"auteur·rice",
            auteurs :"auteur·rices",
            Barbu : "Barbu·e",
            Barbus :"Barbu·es",
            barbu :"barbu·e",
            barbus :"barbu·es",
            Bâtisseur :"Bâtisseur·se",
            Bâtisseurs :"Bâtisseur·ses",
            bâtisseur :"bâtisseur·se",
            bâtisseurs :"bâtisseur·ses",
            Beau :"Beau·belle",
            Beaux:"Beaux·belles",
            beau :"beau·belles",
            beaux: "beaux·belles",
            Bienveillant: "Bienveillant·e",
            Bienveillants: "Bienveillant·es",
            bienveillant :"bienveillant·e",
            bienveillants :"bienveillant·es",
            Biscornu :"Biscornu·e",
            Biscornus :"Biscornu·es",
            biscornu :"biscornu·e",
            biscornus :"biscornu·es",
            Bossu :"Bossu·e",
            Bossus :"Bossu·es",
            bossu :"bossu·e",
            bossus :"bossu·es",
            Brigadier :"Brigadier·e",
            Brigadiers :"Brigadier·es",
            brigadier :"brigadier·e",
            brigadiers :"brigadier·es",
            Candidat :"Candidat·e",
            Candidats :"Candidat·es",
            candidat :"candidat·e",
            candidats :"candidat·es",
            Captivant :"Captivant·e",
            Captivants :"Captivant·es",
            captivant :"captivant·e",
            captivants :"captivant·es",
            Cardinal :"Cardinal·e",
            Cardinaux :"Cardinal·es",
            cardinal :"cardinal·e",
            cardinaux :"cardinal·es",
            Charmant :"Charmant·e",
            Charmants :"Charmant·es",
            charmant :"charmant·e",
            charmants :"charmant·es",
            Chef :"Chef·fe",
            Chefs :"Chef·fes",
            chef :"chef·fe",
            chefs :"chef·fes",
            Chercheur :"Chercheur·se",
            Chercheurs :"Chercheur·ses",
            chercheur :"chercheur·se",
            chercheurs :"chercheur·ses",
            Chétif :"Chétif·ve",
            Chétifs :"Chétif·ves",
            chétif :"chétif·ve",
            Chétifs :"Chétif·ves",
            Citoyen :"Citoyen·ne",
            Citoyens :"Citoyen·nes",
            citoyen :"citoyen·ne",
            citoyenc :"citoyen·nes",
            Clair :"Clair·e",
            Clairs :"Clair·es",
            clair :"clair·e",
            clairs :"clair·es",
            Client: "Client·e",
            Clients :"Client·es",
            client :"client·e",
            clients:"client·es",
            Comédien :"Comédien·ne",
            Comédiens :"Comédien·nes",
            comédien :"comédien·ne",
            comédiens :"comédien·nes",
            Commandant :"Commandant·e",
            Commandants :"Commandant·es",
            commandant :"commandant·e",
            commandants :"commandant·es",
            Compétent :"Compétent·e",
            Compétents :"Compétent·es",
            compétent :"compétent·e",
            compétents :"compétent·es",
            Compositeur :"Compositeur·rice",
            Compositeurs :"Compositeur·rices",
            compositeur :"compositeur·rice",
            compositeurs :"compositeur·rices",
            Conducteur :"Conducteur·rice",
            Conducteurs :"Conducteur·rices",
            conducteur :"conducteur·rice",
            conducteurs :"conducteur·rices",
            Conscient :"Conscient·e",
            Conscients :"Conscient·es",
            conscient :"conscient·e",
            conscients :"conscient·es",
            Conseiller :"Conseiller·ère",
            Conseillers :"Conseiller·ères",
            conseiller :"conseiller·ère",
            conseillers :"conseiller·ères",
            Constant :"Constant·e",
            Constants :"Constant·es",
            constant :"constant·e",
            constants :"constant·es",
            Coordinateur :"Coordinateur·rice",
            Coordinateurs :"Coordinateur·rices",
            coordinateur :"coordinateur·rice",
            coordinateurs :"coordinateur·rices",
            Correspondant :"Correspondant·e",
            Correspondants :"Correspondant·es",
            correspondant :"correspondant·e",
            correspondant :"correspondant·es",
            Courageux :"Courageux·se",
            Courageux : "Courageux·ses",
            courageux :"courageux·se",
            courageux :"courageux·ses",
            Courtois :"Courtois·e",
            Courtois :"Courtois·es",
            courtois :"courtois·e",
            courtois :"courtois·es",
            Créateur :"Créateur·rice",
            Créateurs :"Créateur·rices",
            créateur: "créateur·rice",
            créateurs :"créateur·rices",
            Créatif :"Créatif·ve",
            Créatifs :"Créatif·ves",
            créatif :"créatif·ve",
            créatifs :"créatif·ves",
            Cultivateur :"Cultivatrice",
            Cultivateurs :"Cultivatrices",
            cultivateur :"cultivatrice",
            cultivateurs :"cultivatrices",
            Curieux :"Curieux·se",
            Curieux :"Curieux·ses",
            curieux :"curieux·se",
            curieux :"curieux·ses",
            Député:"Député·e",
            Députés:"Député·es",
            député :"député·e",
            députés :"député·es",
            Dessinateur:"Dessinateur·rice",
            Dessinateurs:"Dessinateur·rices",
            dessinateur :"dessinateur·rice",
            dessinateurs:"dessinateur·rices",
            Développeur :"Développeur·euse",
            Développeurs :"Développeur·euses",
            développeur :"développeur·euse",
            développeurs :"développeur·euses",
            Directeur :"Directeur·trice",
            Directeurs :"Directeur·trices",
            directeur :"directeur·trice",
            directeurs :"directeur·trices",
            Directeur :"Directeur·trice",
            Docteur :"Docteur·esse",
            Docteurs :"Docteur·esses",
            docteur :"docteur·esse",
            docteurs :"docteur·esses",
            Doux :"Doux·ce",
            Doux :"Doux·ces",
            doux :"doux·ce",
            doux :"doux·ces",
            Droit :"Droit·e",
            Droits :"Droit·es",
            droit :"droit·e",
            droits :"droit·es",
            Écrivain :"Écrivain·e",
            Écrivains :"Écrivain·es",
            écrivain :"écrivain·e",
            écrivains :"écrivain·es",
            Éditeur :"Éditeur·rice",
            Éditeur :"Éditeur·rice",
            éditeur :"éditeur·rice",
            éditeur :"éditeur·rices",
            Éducateur :"Éducateur·rice",
            Éducateurs :"Éducateur·rices",
            éducateur : "éducateur·rice",
            éducateurs :"éducateur·rices",
            Électeur :"Électeur·trice",
            Électeurs :"Électeur·trices",
            électeur :"électeur·trice",
            électeurs :"électeur·trices",
            Élu :"Élu·e",
            Élus :"Élu·es",
            élu :"élu·e",
            élus :"élu·es",
            Employé :"Employé·e",
            Employés :"Employé·es",
            employé :"employé·e",
            employés :"employé·es",
            Entraîneur :"Entraîneur·e",
            Entraîneurs :"Entraîneur·es",
            entraîneur :"entraîneur·e",
            entraîneurs :"entraîneur·es",
            Entrepreneur :"Entrepreneur·euse",
            Entrepreneurs :"Entrepreneur·euses",
            entrepreneur :"entrepreneur·euse",
            entrepreneurs :"entrepreneur·euses",
            Étudiant :"Étudiant·e",
            Étudiants :"Étudiant·es",
            étudiant :"étudiant·e",
            étudiants :"étudiant·es",
            Évident :"Évident·e",
            Évidents :"Évident·es",
            évident :"évident·e",
            évidents :"évident·es",
            Expert :"Expert·e",
            Experts :"Expert·es",
            expert :"expert·e",
            experts :"expert·es",
            Favori :"Favori·te",
            Favoris :"Favori·tes",
            favori :"favori·te",
            favoris :"favori·tes",
            Féminin :"Féminin·e",
            Féminins :"Féminin·es",
            Féminin :"Féminin·e",
            féminins :"féminin·es",
            Fier :"Fièr·e",
            Fiers :"Fièr·es",
            fier :"fièr·e",
            fiers :"fièr·es",
            Fort :"Fort·e",
            Forts :"Fort·es",
            fort :"fort·e",
            forts :"fort·es",
            Français :"Français·e",
            Françaises :"Français·es",
            français :"français·e",
            français :"français·es",
            Gardien :"Gardien·ne",
            Gardiens :"Gardien·nes", 
            gardien :"gardien·ne",
            gardiens :"gardien·nes",
            Généreux :"Généreux·se",
            Généreux :"Généreux·ses",
            généreux :"généreux·se",
            généreux :"généreux·ses",
            Gentil :"Gentil·le",
            Gentils :"Gentil·les",
            gentil :"gentil·le",
            gentils :"gentil·les",
            Gérant :"Gérant·e",
            Gérants :"Gérant·es",
            gérant :"gérant·e",
            gérants :"gérant·es",
            Gourmand :"Gourmand·e",
            Gourmands :"Gourmand·es",
            gourmand :"gourmand·e",
            gourmands :"gourmand·es",
            Gouverneur :"Gouverneur·e",
            Gouverneurs :"Gouverneur·es",
            gouverneur :"gouverneur·e",
            gouverneurs :"gouverneur·es",
            Gracieux :"Gracieux·se",
            Gracieux :"Gracieux·ses",
            gracieux :"gracieux·se",
            gracieux :"gracieux·ses",
            Grand :"Grand·e",
            Grands :"Grand·es",
            grand :"grand·e",
            grands :"grand·es",
            Gros :"Gros·se",
            Gros :"Gros·ses",
            gros :"gros·se",
            gros :"gros·ses",
            Héros :"Héros·ïne",
            Héros :"Héros·ïnes",
            héros :"héros·ïne",
            héros :"héros·ïnes",
            Heureux :"Heureux·se",
            Heureux :"Heureux·ses",
            heureux :"heureux·se",
            heureux :"heureux·ses",
            Historien :"Historien·ne",
            Historiens :"Historien·nes",
            historien :"historien·ne",
            historiens :"historien·nes",
            Hôte :"Hôte·sse",
            Hôtes :"Hôte·sses",
            hôte :"hôte·sse",
            hôtes :"hôte·sses",
            Illustrateur :"Illustrateur·rice",
            Illustrateurs :"Illustrateur·rices",
            illustrateur :"illustrateur·rice",
            illustrateurs : "illustrateur·rices"
        };
        //boucle permettant de remplacer le côté gauche du dico par le côté droit.
        for (let i = 0; i < text.length; i++) { 
            for (let y = 0; y < Object.keys(dictionary).length; y++) {
                if (text[i].innerHTML.includes(Object.keys(dictionary)[y])) {
                    text[i].innerHTML = text[i].innerHTML.replaceAll(Object.keys(dictionary)[y], dictionary[Object.keys(dictionary)[y]]);
                }
            }
        }
    } 
    }   
);


