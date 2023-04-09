export default function Contacts(){
     return (
          <main className="section">
               <div className="container">
                    <h1 className="title-1">Contacts</h1>

                    <ul className="content-list">
                         <li className="content-list__item">
                              <h2 className="title-2">Location</h2>
                              <p>Lviv, Ukraine</p>
                         </li>

                         <li className="content-list__item">
                              <h2 className="title-2">Telegram / WhatsApp</h2>
                              <p><a href="tel:+79051234567">+(380) 68-301-21-99</a></p>
                         </li>

                         <li className="content-list__item">
                              <h2 className="title-2">Email</h2>
                              <p><a href="mailto:webdev@protonmail.com">nazarfedus5@gmail.com</a></p>
                         </li>
                    </ul>

               </div>
          </main>
     );
}