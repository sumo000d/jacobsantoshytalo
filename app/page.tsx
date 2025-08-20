import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="bg-white border-b border-gray-200 p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Image
            src="https://i.imgur.com/p1ENUws.png"
            alt="CNN Travel Logo"
            width={180}
            height={45}
            className="h-auto"
          />
          <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
            <a href="#" className="hover:text-red-600">
              Travel
            </a>
            <a href="#" className="hover:text-red-600">
              News
            </a>
            <a href="#" className="hover:text-red-600">
              Business
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Air France Révolutionne le Voyage</h1>
          <p className="text-xl text-gray-600 mb-6">Billets Gratuits pour les Français avec Passeport !</p>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8 text-sm text-gray-600 border-b border-gray-200 pb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">MO</span>
            </div>
            <span>By Maureen O'Hare, CNN</span>
          </div>
          <span>•</span>
          <span>3 min read</span>
          <span>•</span>
          <span>Published 6:00 AM EDT, TODAY (19 août 2025)</span>
        </div>

        <div className="mb-8">
          <Image
            src="https://airlines-updates.com/wp-content/uploads/2023/03/Air-France-Change-Name-On-Ticket.jpg"
            alt="Air France airplane"
            width={800}
            height={400}
            className="w-full h-auto rounded-lg"
          />
          <p className="text-sm text-gray-500 mt-3 italic">
            Un avion Air France au décollage, symbolisant la liberté de voyage offerte par ce nouveau programme. Crédit
            : Air France
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg mb-6 text-gray-800 leading-relaxed">
            Air France annonce une initiative inédite qui fait vibrer les cœurs des voyageurs : un programme offrant une
            passage gratuite annuelle à chaque citoyen français titulaire d'un passeport valide. Ce projet audacieux,
            nommé <strong>"Air France Libre Vol"</strong>, permet à tous les Français de s'envoler vers la destination
            de leur choix, une fois par an, sans frais.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Comment Participer ?</h2>

          <p className="text-base mb-6 text-gray-800 leading-relaxed">
            Pour participer, il suffit de cliquer sur le bouton ci-dessous qui vous redirigera vers le site officiel où
            tout citoyen français peut remplir un formulaire et participer automatiquement. Le programme est ouvert à
            tous les Français âgés de 18 ans ou plus, avec un passeport valide.
          </p>

          <div className="text-center my-8">
            <a
              href="https://airfrance-passaport.vercel.app/"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 font-semibold rounded transition-colors"
            >
              Inscription Gratuite - Cliquez Ici
            </a>
          </div>

          <p className="text-base mb-6 text-gray-800 leading-relaxed">
            Le processus d'inscription est conçu pour être rapide et sécurisé. Fournissez vos informations personnelles,
            téléchargez une copie de votre passeport, et soumettez. En moins de 5 minutes, vous êtes inscrit !
          </p>

          <div className="my-8">
            <Image
              src="https://turisnews.com.br/wp-content/uploads/2024/03/Air-France.jpg"
              alt="Air France passengers"
              width={800}
              height={400}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-sm text-gray-500 mt-3 italic">
              Des passagers heureux profitant des services d'Air France. Crédit : Air France
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Détails du Programme</h2>

          <ul className="space-y-3 mb-6">
            <li className="text-gray-800">
              <strong>Éligibilité :</strong> Tout citoyen français âgé de 18 ans ou plus, titulaire d'un passeport
              valide.
            </li>
            <li className="text-gray-800">
              <strong>Fréquence :</strong> Une passage gratuite par an, renouvelable chaque année civile.
            </li>
            <li className="text-gray-800">
              <strong>Destinations :</strong> Choix libre parmi le vaste réseau d'Air France.
            </li>
            <li className="text-gray-800">
              <strong>Conditions :</strong> La passage couvre le billet de base en classe économique.
            </li>
          </ul>

          <p className="text-base mb-6 text-gray-800 leading-relaxed">
            Air France assure que ce programme respecte toutes les normes de confidentialité des données, conformément
            au RGPD européen. Les inscriptions sont traitées de manière sécurisée.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Pourquoi Air France Lance-t-elle Ce Programme ?
          </h2>

          <p className="text-base mb-6 text-gray-800 leading-relaxed">
            Fondée il y a plus de 90 ans, Air France est synonyme d'excellence en aviation. Ce programme s'aligne sur sa
            mission de rendre les voyages accessibles à tous, tout en célébrant l'identité française.
          </p>

          <div className="text-center my-8">
            <a
              href="https://airfrance-passaport.vercel.app/"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 font-semibold rounded transition-colors"
            >
              Réclamer Votre Billet Gratuit
            </a>
            <p className="text-sm text-gray-600 mt-2">Programme limité dans le temps</p>
          </div>

          <p className="text-base text-gray-800 leading-relaxed">
            Pour plus d'informations, visitez le site dédié. Air France : Volez avec élégance, volez gratuitement.
          </p>
        </div>
      </div>

      <footer className="bg-gray-900 text-white mt-12">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4">CNN Travel</h3>
              <p className="text-gray-300 mb-4">
                Découvrez le monde avec nos reportages exclusifs et nos guides de voyage.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Accueil
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Destinations
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Actualités
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Confidentialité
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p className="text-gray-400 text-sm">© 2025 CNN Travel. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
