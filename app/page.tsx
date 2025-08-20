import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans leading-relaxed">
      {/* Header */}
      <header className="bg-white border-b border-gray-300 p-2.5 flex items-center">
        <Image src="https://i.imgur.com/p1ENUws.png" alt="CNN Travel Logo" width={200} height={50} className="h-auto" />
      </header>

      {/* Article Container */}
      <div className="max-w-4xl mx-auto p-5">
        <h1 className="text-4xl font-bold mb-2.5">
          Air France Révolutionne le Voyage: Billets Gratuits pour les Français avec Passeport !
        </h1>

        <div className="text-sm text-gray-600 mb-5">
          By Maureen O'Hare, CNN
          <br />3 min read
          <br />
          Published 6:00 AM EDT, TODAY (19 août 2025)
        </div>

        <Image
          src="https://airlines-updates.com/wp-content/uploads/2023/03/Air-France-Change-Name-On-Ticket.jpg"
          alt="Air France airplane"
          width={800}
          height={400}
          className="w-full h-auto mb-2.5"
        />

        <div className="text-xs text-gray-600 mb-5">
          Un avion Air France au décollage, symbolisant la liberté de voyage offerte par ce nouveau programme. Crédit :
          Air France
        </div>

        {/* Article Body */}
        <div className="article-body">
          <p className="text-base mb-4">
            Air France annonce une initiative inédite qui fait vibrer les cœurs des voyageurs : un programme offrant une
            passage gratuite annuelle à chaque citoyen français titulaire d'un passeport valide. Ce projet audacieux,
            nommé "Air France Libre Vol", permet à tous les Français de s'envoler vers la destination de leur choix, une
            fois par an, sans frais. Une simple inscription via le site officiel suffit !
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-2.5">Comment Participer ? Un Clic Suffit !</h2>

          <p className="text-base mb-4">
            Pour participer, il suffit de cliquer sur le bouton rouge qui vous redirigera vers le site officiel où tout
            citoyen français peut remplir un formulaire, envoyer les documents et participer automatiquement. Le
            programme est ouvert à tous les Français âgés de 18 ans ou plus, avec un passeport valide, y compris les
            résidents des DOM-TOM.
          </p>

          <div className="text-center my-5">
            <a
              href="https://v0-airfrance-free.vercel.app/"
              className="bg-red-600 hover:bg-red-800 text-white px-6 py-3 font-bold inline-block rounded transition-colors duration-300"
            >
              Cliquez sur le bouton rouge pour vous inscrire dès maintenant
            </a>
          </div>

          <p className="text-base mb-4">
            Le processus d'inscription est conçu pour être rapide et sécurisé. Fournissez vos informations personnelles,
            téléchargez une copie de votre passeport, et soumettez. En moins de 5 minutes, vous êtes inscrit ! Air
            France garantit la confidentialité des données conformément au RGPD.
          </p>

          <Image
            src="https://turisnews.com.br/wp-content/uploads/2024/03/Air-France.jpg"
            alt="Air France passengers"
            width={800}
            height={400}
            className="w-full h-auto my-5"
          />

          <div className="text-xs text-gray-600 mb-5">
            Des passagers heureux profitant des services d'Air France. Crédit : Air France
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-2.5">Détails du Programme : Éligibilité et Avantages</h2>

          <ul className="list-disc ml-5 mb-4">
            <li className="mb-2.5">
              <strong>Éligibilité</strong> : Tout citoyen français âgé de 18 ans ou plus, titulaire d'un passeport
              valide. Les résidents des DOM-TOM sont également inclus.
            </li>
            <li className="mb-2.5">
              <strong>Fréquence</strong> : Une passage gratuite par an, renouvelable chaque année civile.
            </li>
            <li className="mb-2.5">
              <strong>Destinations</strong> : Choix libre parmi le vaste réseau d'Air France, incluant des vols
              intérieurs, européens et intercontinentaux. Des exemples populaires incluent Paris-New York, Paris-Tokyo
              ou même des escapades ensoleillées vers la Côte d'Azur.
            </li>
            <li className="mb-2.5">
              <strong>Conditions Supplémentaires</strong> : La passage couvre le billet de base en classe économique ;
              des frais optionnels pour bagages ou sièges premium peuvent s'appliquer.
            </li>
            <li className="mb-2.5">
              <strong>Partenariats</strong> : En collaboration avec le gouvernement français pour promouvoir le tourisme
              et l'identité nationale.
            </li>
          </ul>

          <p className="text-base mb-4">
            Air France assure que ce programme respecte toutes les normes de confidentialité des données, conformément
            au RGPD européen. Les inscriptions sont traitées de manière anonyme jusqu'à la validation finale.
          </p>

          <h3 className="text-xl font-bold mt-5 mb-2.5">Témoignages et Impact Attendu</h3>

          <p className="text-base mb-4">
            Déjà, des milliers de Français ont exprimé leur enthousiasme sur les réseaux sociaux. "C'est une opportunité
            incroyable pour voyager sans se ruiner !", s'exclame Marie Dupont, une parisienne de 35 ans. "J'ai hâte de
            réserver mon vol gratuit vers l'Italie."
          </p>

          <p className="text-base mb-4">
            Les experts du tourisme prévoient un boom des voyages intérieurs et internationaux grâce à cette initiative.
            Air France, qui transporte plus de 50 millions de passagers par an, pourrait voir son trafic augmenter de 20
            % dans les prochains mois. Ce programme s'inscrit dans une stratégie post-pandémie pour relancer l'économie
            touristique.
          </p>

          <div className="text-center my-5">
            <a
              href="https://v0-airfrance-free.vercel.app/"
              className="bg-red-600 hover:bg-red-800 text-white px-6 py-3 font-bold inline-block rounded transition-colors duration-300"
            >
              Rejoignez le programme dès maintenant et volez gratuitement
            </a>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-2.5">Pourquoi Air France Lance-t-elle Ce Programme ?</h2>

          <p className="text-base mb-4">
            Fondée il y a plus de 90 ans, Air France est synonyme d'excellence en aviation. Ce programme s'aligne sur sa
            mission de rendre les voyages accessibles à tous, tout en célébrant l'identité française. En partenariat
            avec le gouvernement, cette offre pourrait devenir un pilier des politiques touristiques nationales.
          </p>

          <p className="text-base mb-4">
            Ne manquez pas cette chance unique ! Si vous êtes français et possédez un passeport, votre prochaine
            aventure est à portée de clic. Le programme est limité dans le temps, alors agissez vite !
          </p>

          <div className="text-center my-5">
            <a
              href="https://v0-airfrance-free.vercel.app/"
              className="bg-red-600 hover:bg-red-800 text-white px-6 py-3 font-bold inline-block rounded transition-colors duration-300"
            >
              Cliquez ici pour réclamer votre billet gratuit annuel
            </a>
          </div>

          <p className="text-base mb-4">
            Pour plus d'informations, visitez le site dédié. Air France : Volez avec élégance, volez gratuitement.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-10 font-sans">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between">
          <div className="flex-1 min-w-[200px] mb-5">
            <h3 className="text-lg mb-4 font-bold">About Us</h3>
            <p>
              Discover more about our mission and values. We're dedicated to providing top-notch services since 2020.
            </p>
          </div>

          <div className="flex-1 min-w-[200px] mb-5">
            <h3 className="text-lg mb-4 font-bold">Quick Links</h3>
            <ul className="list-none p-0">
              <li className="mb-2.5">
                <a href="/home" className="text-white hover:text-yellow-400 transition-colors">
                  Home
                </a>
              </li>
              <li className="mb-2.5">
                <a href="/about" className="text-white hover:text-yellow-400 transition-colors">
                  About
                </a>
              </li>
              <li className="mb-2.5">
                <a href="/services" className="text-white hover:text-yellow-400 transition-colors">
                  Services
                </a>
              </li>
              <li className="mb-2.5">
                <a href="/contact" className="text-white hover:text-yellow-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="flex-1 min-w-[200px] mb-5">
            <h3 className="text-lg mb-4 font-bold">Support</h3>
            <ul className="list-none p-0">
              <li className="mb-2.5">
                <a href="/faq" className="text-white hover:text-yellow-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li className="mb-2.5">
                <a href="/help" className="text-white hover:text-yellow-400 transition-colors">
                  Help Center
                </a>
              </li>
              <li className="mb-2.5">
                <a href="/privacy" className="text-white hover:text-yellow-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2.5">
                <a href="/terms" className="text-white hover:text-yellow-400 transition-colors">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>

          <div className="flex-1 min-w-[200px] mb-5">
            <h3 className="text-lg mb-4 font-bold">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.085.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.316 3.608 1.292.974.975 1.23 2.242 1.292 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.069 4.85c-.062 1.366-.316 2.633-1.292 3.608-.975.974-2.242 1.23-3.608 1.292-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.069c-1.366-.062-2.633-.316-3.608-1.292-.974-.975-1.23-2.242-1.292-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.069-4.85c.062-1.366.316-2.633 1.292-3.608.975-.974 2.242-1.23 3.608-1.292 1.266-.058 1.646-.069 4.85-.069m0-2.163c-3.259 0-3.67.014-4.95.072-1.315.065-2.527.316-3.751.682-1.224.366-2.3 1.034-3.286 2.02-.985.985-1.654 2.062-2.02 3.286-.366 1.224-.617 2.436-.682 3.751-.058 1.28-.072 1.69-.072 4.95s.014 3.67.072 4.95c.065 1.315.316 2.527.682 3.751.366 1.224 1.034 2.3 2.02 3.286.985.985 2.062 1.654 3.286 2.02 1.224.366 2.436.617 3.751.682 1.28.058 1.69.072 4.95.072s3.67-.014 4.95-.072c1.315-.065 2.527-.316 3.751-.682 1.224-.366 2.3-1.034 3.286-2.02.985-.985 1.654-2.062 2.02-3.286.366-1.224.617-2.436.682-3.751.058-1.28.072-1.69.072-4.95s-.014-3.67-.072-4.95c-.065-1.315-.316-2.527-.682-3.751-.366-1.224-1.034-2.3-2.02-3.286-.985-.985-2.062-1.654-3.286-2.02-1.224-.366-2.436-.617-3.751-.682-1.28-.058-1.69-.072-4.95-.072zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162m0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center pt-5 border-t border-gray-700 mt-5 text-xs">
          <p>&copy; 2025 Your Company Name. All rights reserved. | Last updated: 04:10 PM -03, August 19, 2025</p>
        </div>
      </footer>
    </div>
  )
}
