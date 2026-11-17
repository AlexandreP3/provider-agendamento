import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>Acompile | Em manutenção</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="logo">
        Acompile<span>.</span>
      </div>

      <main className="container">
        <div className="gears" aria-hidden="true">
          <svg className="gear" viewBox="0 0 100 100">
            <g fill="currentColor">
              <rect x="43" y="2" width="14" height="20" rx="3" />
              <rect x="43" y="78" width="14" height="20" rx="3" />
              <rect x="2" y="43" width="20" height="14" rx="3" />
              <rect x="78" y="43" width="20" height="14" rx="3" />
              <rect
                x="43"
                y="2"
                width="14"
                height="20"
                rx="3"
                transform="rotate(45 50 50)"
              />
              <rect
                x="43"
                y="2"
                width="14"
                height="20"
                rx="3"
                transform="rotate(90 50 50)"
              />
              <rect
                x="43"
                y="2"
                width="14"
                height="20"
                rx="3"
                transform="rotate(135 50 50)"
              />
              <circle cx="50" cy="50" r="30" />
            </g>
            <circle cx="50" cy="50" r="12" fill="#0d0e1c" />
          </svg>

          <svg className="gear small" viewBox="0 0 100 100">
            <g fill="currentColor">
              <rect x="43" y="2" width="14" height="20" rx="3" />
              <rect x="43" y="78" width="14" height="20" rx="3" />
              <rect x="2" y="43" width="20" height="14" rx="3" />
              <rect x="78" y="43" width="20" height="14" rx="3" />
              <rect
                x="43"
                y="2"
                width="14"
                height="20"
                rx="3"
                transform="rotate(45 50 50)"
              />
              <rect
                x="43"
                y="2"
                width="14"
                height="20"
                rx="3"
                transform="rotate(90 50 50)"
              />
              <rect
                x="43"
                y="2"
                width="14"
                height="20"
                rx="3"
                transform="rotate(135 50 50)"
              />
              <circle cx="50" cy="50" r="30" />
            </g>
            <circle cx="50" cy="50" r="12" fill="#0d0e1c" />
          </svg>
        </div>

        <p className="status">SYSTEM UPDATE</p>

        <h1>
          Estamos construindo
          <br />
          algo <span>incrível.</span>
        </h1>

        <p className="description">
          Nosso site está passando por melhorias. Estamos trabalhando para
          trazer uma nova experiência para você.
          <br />
          Em breve estaremos de volta!
        </p>

        <div className="progress" aria-hidden="true">
          <span />
        </div>
      </main>

      <footer className="footer">
        © 2026 Acompile. Desenvolvendo o futuro.
      </footer>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          min-height: 100vh;
          background: #0d0e1c;
          color: #ffffff;
          font-family: Arial, Helvetica, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
        }

        body::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(#7269ef0a 1px, transparent 1px),
            linear-gradient(90deg, #7269ef0a 1px, transparent 1px);
          background-size: 45px 45px;
          mask-image: linear-gradient(to bottom, black, transparent);
        }

        .logo {
          position: absolute;
          top: 35px;
          left: 8%;
          font-size: 26px;
          font-weight: bold;
          letter-spacing: -1px;
        }

        .logo span {
          color: #7269ef;
        }

        .container {
          position: relative;
          z-index: 1;
          text-align: center;
          padding: 25px;
        }

        .gears {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 45px;
        }

        .gear {
          width: 120px;
          height: 120px;
          color: #7269ef;
          filter: drop-shadow(0 0 15px #7269ef55);
          animation: girar 12s linear infinite;
        }

        .gear.small {
          width: 75px;
          height: 75px;
          margin-left: -12px;
          margin-top: 55px;
          color: #ffffff;
          animation: girar-reverso 9s linear infinite;
        }

        @keyframes girar {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes girar-reverso {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .status {
          color: #7269ef;
          font-size: 13px;
          font-weight: bold;
          letter-spacing: 4px;
          margin-bottom: 20px;
        }

        h1 {
          font-size: clamp(32px, 5vw, 54px);
          margin-bottom: 20px;
          letter-spacing: -2px;
        }

        h1 span {
          color: #7269ef;
        }

        .description {
          color: #a1a1b5;
          font-size: 16px;
          line-height: 1.8;
          max-width: 500px;
          margin: auto;
        }

        .progress {
          width: 220px;
          height: 4px;
          background: #25263a;
          border-radius: 10px;
          margin: 35px auto 15px;
          overflow: hidden;
        }

        .progress span {
          display: block;
          height: 100%;
          width: 45%;
          background: #7269ef;
          border-radius: 10px;
          animation: carregar 2s ease-in-out infinite alternate;
        }

        @keyframes carregar {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(120%);
          }
        }

        .footer {
          position: absolute;
          bottom: 25px;
          color: #66677c;
          font-size: 12px;
          z-index: 1;
        }

        @media (max-width: 600px) {
          .logo {
            left: 0;
            width: 100%;
            text-align: center;
          }

          .gear {
            width: 95px;
            height: 95px;
          }

          .gear.small {
            width: 60px;
            height: 60px;
          }
        }
      `}</style>
    </>
  );
}

export default Home;
