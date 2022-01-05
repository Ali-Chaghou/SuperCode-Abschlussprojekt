import React from "react";
import "./DetailSite.css";

class DetailSite extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="detail-site">
        <header>
          <h3>Ar Senal</h3>
          <section>
            <article className="detail-site-header-text">
              <div>
                <h5>England </h5>
                <h4>
                  <span>Country</span>
                </h4>
              </div>
              <div>
                <h5>Holloway, London</h5>
                <h4>
                  <span>Location</span>
                </h4>
              </div>
              <div>
                <h5>1892</h5>
                <h4>
                  <span>Established</span>
                </h4>
              </div>
              <div>
                <h5>Soccer</h5>
                <h4>
                  <span>Sport</span>
                </h4>
              </div>
            </article>
            <article>
              <img src="img/background_img.jpg" alt="Image" />
            </article>
          </section>
        </header>
        <main>
          <article className="competitions">
            <p>Competitions</p>
            <div>
              <h5 className="Left-to-right" >Uefa Europa League</h5>
              <h5 className="Left-to-right" >Fa Cup</h5>
              <h5 className="Left-to-right" >Efl Cup</h5>
              <h5 className="Left-to-right" >Fa Communit Shield</h5>
            </div>
          </article>
          <article className="description">
            <div>
              <h5>DESCRIPTION</h5>
            </div>
            <div>
              <p>
                Arsenal Football Club is a professional football club based in
                Islington, London, England, that plays in the Premier League,
                the top flight of English football. The club has won 13 League
                titles, a record 13 FA Cups, 2 League Cups, 15 FA Community
                Shields, 1 League Centenary Trophy, 1 UEFA Cup Winners' Cup and
                1 Inter-Cities Fairs Cup.\r\n\r\nArsenal was the first club from
                the South of England to join The Football League, in 1893, and
                they reached the First Division in 1904. Relegated only once, in
                1913, they continue the longest streak in the top division, and
                have won the second-most top-flight matches in English football
                history. In the 1930s, Arsenal won five League Championships and
                two FA Cups, and another FA Cup and two Championships after the
                war. In 1970–71, they won their first League and FA Cup Double.
                Between 1989 and 2005, they won five League titles and five FA
                Cups, including two more Doubles. They completed the 20th
                century with the highest average league position.\r\n\r\nHerbert
                Chapman won Arsenal's first national trophies, but died
                prematurely. He helped introduce the WM formation, floodlights,
                and shirt numbers, and added the white sleeves and brighter red
                to the club's kit. Arsène Wenger was the longest-serving manager
                and won the most trophies. He won a record 7 FA Cups, and his
                title-winning team set an English record for the longest
                top-flight unbeaten league run at 49 games between 2003 and
                2004, receiving the nickname The Invincibles.\r\n\r\nIn 1886,
                Woolwich munitions workers founded the club as Dial Square. In
                1913, the club crossed the city to Arsenal Stadium in Highbury,
                becoming close neighbours of Tottenham Hotspur, and creating the
                North London derby. In 2006, they moved to the nearby Emirates
                Stadium. In terms of revenue, Arsenal is the ninth
                highest-earning football club in the world, earned €487.6m in
                2016–17 season. Based on social media activity from 2014 to
                2015, Arsenal's fanbase is the fifth largest in the world. In
                2018, Forbes estimated the club was the third most valuable in
                England, with the club being worth $2.24 billion.
              </p>
              <img src="img/logo.png" alt="Team logo" />
            </div>
          </article>
          <article className="stadium">
            <h6>Stadium</h6>
            <div className="stadium-wrapper">
              <p>
                The Emirates Stadium (known as Ashburton Grove prior to
                sponsorship, and as Arsenal Stadium for UEFA competitions) is a
                football stadium in Holloway, London, England, and the home of
                Arsenal. With a capacity of 60,704 it is the fourth-largest
                football stadium in England after Wembley Stadium, Old Trafford
                and Tottenham Hotspur Stadium.\r\n\r\nIn 1997, Arsenal explored
                the possibility of relocating to a new stadium, having been
                denied planning permission by Islington Council to expand its
                home stadium, Highbury. After considering various options
                (including purchasing Wembley Stadium), the club bought an
                industrial and waste disposal estate in Ashburton Grove in 2000.
                A year later, they received the council's approval to build a
                stadium on the site; manager Arsène Wenger described this as the
                \"biggest decision in Arsenal's history\" since the board
                appointed Herbert Chapman. Relocation began in 2002, but
                financial difficulties delayed work until February 2004.
                Emirates was later announced as the main sponsor for the
                stadium. The entire stadium project was completed in 2006 at a
                cost of £390 million. The club's former stadium was redeveloped
                as Highbury Square, an apartment complex.\r\n\r\nThe stadium has
                undergone a process of \"Arsenalisation\" since 2009 with the
                aim of restoring Arsenal's heritage and history. The stadium has
                hosted international fixtures and music concerts.
              </p>
              <div>
                <div>
                  <h5>Emirates Ståadium</h5>
                  <span>Home</span>
                </div>
                <div>
                  <h5>60338</h5>
                  <h4>
                    <span>Capacity</span>
                  </h4>
                </div>
              </div>
            </div>
          </article>
        </main>
        <footer>
          <a className="Left-to-right" href="#">Website</a>
          <a className="Left-to-right" href="#">Facebook</a>
          <a className="Left-to-right" href="#">Twitter</a>
          <a className="Left-to-right" href="#">Instagram</a>
          <a className="Left-to-right" href="#">Youtube</a>
        </footer>
      </section>
    );
  }
}

export default DetailSite;
