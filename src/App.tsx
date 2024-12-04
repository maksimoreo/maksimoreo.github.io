import photoOfMe from './assets/photo.jpg'
import demoCards from './assets/demo-cards.mp4'
import demoDiscordChessBot from './assets/demo-discord-chess-bot-2.mp4'
import demoVtjmk from './assets/demo-vtjmk.mp4'
import demoDockerIrl from './assets/demo-dockerirl.mp4'
import demoTuringMachineApp from './assets/demo-turing-machine-app.png'

import Csharp from './components/pins/Csharp'
import Docker from './components/pins/Docker'
import DotNet from './components/pins/DotNet'
import Mui from './components/pins/Mui'
import Nodejs from './components/pins/Nodejs'
import Playwright from './components/pins/Playwright'
import Rails from './components/pins/Rails'
import React from './components/pins/React'
import Ruby from './components/pins/Ruby'
import Socketio from './components/pins/Socketio'
import Tailwindcss from './components/pins/Tailwindcss'
import Unity from './components/pins/Unity'
import ProjectSection from './components/ProjectSection'
import Socials from './components/Socials'
import Discord from './components/pins/Discord'
import ExternalSite from './components/ExternalSite'

function App() {
  return (
    <div>
      <div className="container flex flex-col mx-auto xl:flex-row">
        <div className="flex flex-col flex-wrap max-w-3xl mt-16 xl:w-2/3 md:mt-24 sm:flex-row">
          <div className="mx-auto max-h-56 max-w-56 sm:mx-4">
            <img className="maxwebsite-photo-of-me" src={photoOfMe} alt="Photo of me" />
          </div>

          <div className="mx-4">
            <h1 className="mt-8 text-4xl font-bold text-center text-gray-900 maxwebsite-font-title md:text-5xl sm:text-left sm:mt-0">
              Maksim Kulagin
            </h1>
            <h2 className="text-2xl font-light text-center text-gray-800 md:text-3xl sm:text-left">
              Backend Engineer | <span className="text-xl md:text-2xl">Vilnius, Lithuania</span>
            </h2>

            <div className="flex justify-center mt-8 sm:justify-start">
              <Socials />
            </div>
          </div>
        </div>

        <div className="mx-3 xl:w-1/3">
          <h3 className="mt-16 text-3xl font-semibold text-gray-700 maxwebsite-font-title md:mt-24">About me</h3>
          <p className="mt-4 text-justify">
            I'm a backend engineer, currently studying Masters degree in Software Engineering. I work professionally
            with Ruby on Rails, but feel myself confident with React and .NET too. I enjoy movies, video games and
            working on personal projects 🧑‍💻
          </p>
        </div>
      </div>

      <div className="container mx-auto">
        <h3 className="mx-3 mt-12 mb-8 text-3xl font-semibold text-gray-700 maxwebsite-font-title md:mt-24 xl:mt-32">
          Projects
        </h3>
      </div>

      <ProjectSection
        backgroundColor="#034ECC"
        demoElements={
          <video autoPlay loop muted playsInline>
            <source src={demoVtjmk} type="video/mp4" />
          </video>
        }
        isTextLeft={true}
        titleText="🧑‍🎓 Conference Management System"
        titleClasses={'text-gray-200'}
        shortDescriptionText="A web app to manage conferences, events, registrations, papers, reviews and related documents."
        descriptionClasses={'text-gray-300'}
        pins={
          <>
            <Rails />
            <Mui />
            <React textColor="light" />
            <Playwright />
          </>
        }
        descriptionText={
          <>
            <p>Features:</p>

            <ul>
              <li className="text-justify">🔑 Authentication and Authorization</li>
              <li className="text-justify">📝 Rich text editor for user-entered content in multiple languages</li>
              <li className="text-justify">📃 MS Word and PDF file generation from user uploaded template</li>
              <li className="text-justify">
                🧪{' '}
                <a className="link-white" href="https://github.com/mkvtech/vtjmk/actions" target="_blank">
                  GitHub Actions
                </a>{' '}
                CI with multiple workflows testing all features of the app
              </li>
            </ul>

            <p className="mt-6 text-justify">
              Conference Management System helps to automate common workflows for conference organizers. It simplifies
              workflows for multiple roles: conference organizers, researchers and reviewers. Conference organizers can
              create events and provide details in multiple languages, Researchers can submit their papers for review by
              multiple automatically assigned reviewers. the web app also allows to generate common paper work documents
              like participation certificate and participants list from templates uploaded by conference organizers.
              This is my PhD project.
            </p>

            <p className="mt-6 mr-4 text-right">
              <a href="https://github.com/mkvtech/vtjmk/" className="link-white" target="_blank">
                GitHub <ExternalSite />
              </a>
            </p>
          </>
        }
      />

      <ProjectSection
        backgroundColor="#171717"
        demoElements={
          <video autoPlay loop muted playsInline>
            <source src={demoCards} type="video/mp4" />
          </video>
        }
        isTextLeft={false}
        titleText="🃏 Card Games"
        titleClasses={'text-gray-200'}
        shortDescriptionText={
          <>
            Collection of online card games to play with your friends, or in case you don't have any, play with AI!{' '}
            <span className="italic font-light" style={{ color: '#ffffff55' }}>
              (currently includes only 1 card game)
            </span>
          </>
        }
        descriptionClasses={'text-gray-300'}
        pins={
          <>
            <React textColor="light" />
            <Nodejs />
            <Socketio />
            <Tailwindcss />
          </>
        }
        descriptionText={
          <>
            <p>Features:</p>
            <ul>
              <li>💬 Chat, rooms</li>
              <li>📱 Responsive UI</li>
              <li>
                🃏{' '}
                <a className="link-white" href="https://en.wikipedia.org/wiki/6_nimmt!" target="_blank">
                  6 nimmt!
                </a>{' '}
                game
              </li>
              <li>🌐 Playable in browser</li>
            </ul>

            <p className="mt-6 mr-4 text-right">
              <a href="https://github.com/maksimoreo/cards/" className="link-white" target="_blank">
                GitHub <ExternalSite />
              </a>
            </p>
          </>
        }
      />

      <ProjectSection
        backgroundColor="#2496ED"
        demoElements={
          <video autoPlay loop muted playsInline>
            <source src={demoDockerIrl} type="video/mp4" />
          </video>
        }
        isTextLeft={true}
        titleText="⚓ DockerIRL"
        titleClasses={'text-gray-200'}
        shortDescriptionText="A modern full-featured progressive Docker management 3D software to replace your current cheap 2D electron app."
        descriptionClasses={'text-gray-300'}
        pins={
          <>
            <Unity variant="white" />
            <Csharp />
            <Docker />
          </>
        }
        descriptionText={
          <>
            <p>Features:</p>
            <ul>
              <li>🐋 Synchronisation with Docker engine</li>
              <li>🖥️ Terminal implementation in Unity</li>
            </ul>

            <p className="mt-6 text-justify">
              App automatically synchronises with Docker engine and places and removes 3D containers models as they
              appear and disappear in the engine. Synchronisation is implemented by reading Docker engine logs in real
              time and additionally querying containers every few seconds. By default, containers in DockerIRL spawn
              with 2 terminals attached: one for observing logs and other to connect to container's shell, but this
              default template can be configured. Surprisingly, the most challenging part of this project was
              implementing the terminal. As terminal emulation is more complicated task than it first appears, it was
              decided to use a dedicated library:{' '}
              <a className="link-white" href="https://github.com/darrenstarr/VtNetCore" target="_blank">
                VtNetCore
              </a>
              . Other libraries used in the project include{' '}
              <a className="link-white" href="https://github.com/dotnet/Docker.DotNet" target="_blank">
                Docker.DotNet
              </a>{' '}
              and{' '}
              <a
                className="link-white"
                href="https://devblogs.microsoft.com/commandline/windows-command-line-introducing-the-windows-pseudo-console-conpty/"
                target="_blank"
              >
                ConPTY
              </a>
              .
            </p>

            <p className="mt-6 mr-4 text-right">
              <a href="https://github.com/maksimoreo/DockerIRL/" className="link-white" target="_blank">
                GitHub <ExternalSite />
              </a>
            </p>
          </>
        }
      />

      <div className="relative w-full h-0">
        <svg
          className="relative"
          id="visual"
          viewBox="0 0 900 100"
          width="100%"
          preserveAspectRatio="none"
          height="100"
          style={{ top: '-50' }}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <rect x="0" y="0" width="900" height="100" fill="#000000"></rect>
          <path
            d="M0 52L64 60L129 46L193 43L257 58L321 74L386 62L450 48L514 74L579 64L643 52L707 72L771 74L836 62L900 67L900 0L836 0L771 0L707 0L643 0L579 0L514 0L450 0L386 0L321 0L257 0L193 0L129 0L64 0L0 0Z"
            fill="#2496ED"
            stroke-linecap="square"
            stroke-linejoin="bevel"
          ></path>
        </svg>
      </div>

      <ProjectSection
        backgroundColor="black"
        demoClasses={'maxwebsite-demo-infinite-maze'}
        titleText="🧙 Infinite Maze"
        titleClasses={'text-gray-200'}
        shortDescriptionText="Good luck finding the exit."
        descriptionClasses={'text-gray-300'}
        pins={
          <>
            <Unity variant="white" />
            <Csharp />
          </>
        }
        descriptionText={
          <>
            <p>Features:</p>
            <ul>
              <li>😵‍💫 Unique maze solving experience</li>
              <li>
                📱 Playable in browser and on mobile:{' '}
                <a className="link-white" href="https://maksimoreo.github.io/InfiniteMaze/">
                  PLAY
                </a>
              </li>
            </ul>

            <p className="mt-6 mr-4 text-right">
              <a href="https://github.com/maksimoreo/InfiniteMaze/" className="link-white" target="_blank">
                GitHub <ExternalSite />
              </a>
            </p>
          </>
        }
      />

      <div className="relative w-full h-0">
        <svg
          className="relative"
          id="visual"
          viewBox="0 0 900 50"
          width="100%"
          preserveAspectRatio="none"
          height="100"
          style={{ top: '-50' }}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <rect x="0" y="0" width="900" height="50" fill="gray"></rect>
          <path
            d="M0 31L82 25L164 27L245 24L327 20L409 24L491 30L573 24L655 38L736 30L818 36L900 25L900 0L818 0L736 0L655 0L573 0L491 0L409 0L327 0L245 0L164 0L82 0L0 0Z"
            fill="#000000"
            stroke-linecap="square"
            stroke-linejoin="bevel"
          ></path>
        </svg>
      </div>

      <ProjectSection
        backgroundColor="gray"
        demoElements={<img src={demoTuringMachineApp} alt="Screenshot of TuringMachineApp" />}
        isTextLeft={true}
        titleText="🤓 Turing Machine Emulator"
        titleClasses={'text-gray-200'}
        shortDescriptionText="Implementation of Turing Machine that can run multiple TMs in parallel"
        descriptionClasses={'text-gray-300'}
        pins={
          <>
            <Csharp />
            <DotNet />
            <span className="font-bold">WPF</span>
          </>
        }
        descriptionText={
          <>
            <p>Features:</p>
            <ul>
              <li>🚦 Execution of multiple TM instances in parallel</li>
              <li>⛔ Thorough control and examine of each TM instance</li>
              <li>📄 Loading instruction set from file</li>
            </ul>

            <p className="mt-6 mr-4 text-right">
              <a href="https://github.com/maksimoreo/TuringMachineApp/" className="link-white" target="_blank">
                GitHub <ExternalSite />
              </a>
            </p>
          </>
        }
      />

      <svg width="100%" height="80" fill="#323337" style={{ background: 'grey' }}>
        <pattern id="pattern-checkers" x="0" y="0" width="320" height="160" patternUnits="userSpaceOnUse">
          <rect x="0" y="60" width="20" height="20"></rect>
          <rect x="20" y="40" width="20" height="20"></rect>
          <rect x="40" y="60" width="20" height="20"></rect>
          <rect x="60" y="40" width="20" height="20"></rect>
          <rect x="80" y="60" width="20" height="20"></rect>
          <rect x="100" y="40" width="20" height="20"></rect>
          <rect x="120" y="60" width="20" height="20"></rect>
          <rect x="140" y="40" width="20" height="20"></rect>
          <rect x="160" y="60" width="20" height="20"></rect>
          <rect x="180" y="40" width="20" height="20"></rect>
          <rect x="200" y="60" width="20" height="20"></rect>
          <rect x="220" y="40" width="20" height="20"></rect>
          <rect x="240" y="60" width="20" height="20"></rect>
          <rect x="260" y="40" width="20" height="20"></rect>
          <rect x="280" y="60" width="20" height="20"></rect>
          <rect x="300" y="40" width="20" height="20"></rect>

          <rect x="20" y="0" width="20" height="20"></rect>
          <rect x="160" y="0" width="20" height="20"></rect>
          <rect x="80" y="20" width="20" height="20"></rect>
          <rect x="200" y="20" width="20" height="20"></rect>
        </pattern>

        <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-checkers)"></rect>
      </svg>

      <ProjectSection
        backgroundColor="#323337"
        demoElements={
          <video autoPlay loop muted playsInline>
            <source src={demoDiscordChessBot} type="video/mp4" />
          </video>
        }
        isTextLeft={false}
        titleText="♟️ Discord Chess Bot"
        titleClasses={'text-gray-200'}
        shortDescriptionText="Discord bot to play chess with"
        descriptionClasses={'text-gray-300'}
        pins={
          <>
            <Ruby />
            <span className="font-bold">ImageMagick</span>
            <Discord />
          </>
        }
        descriptionText={
          <>
            <p>Features:</p>
            <ul>
              <li>✋ Vote system where players vote for their next move</li>
              <li>
                🤖 Integration with a chess engine (like{' '}
                <a className="link-white" href="https://stockfishchess.org/" target="_blank">
                  Stockfish
                </a>
                ) using{' '}
                <a
                  className="link-white"
                  href="https://en.wikipedia.org/wiki/Universal_Chess_Interface"
                  target="_blank"
                >
                  UCI protocol
                </a>
              </li>
              <li>
                🖼️ Chessboard image generation using{' '}
                <a className="link-white" href="https://imagemagick.org/index.php" target="_blank">
                  ImageMagick
                </a>
              </li>
            </ul>

            <p className="mt-6 mr-4 text-right">
              <a href="https://github.com/maksimoreo/chess-dc-bot" className="link-white" target="_blank">
                GitHub <ExternalSite />
              </a>
            </p>
          </>
        }
      />

      <div className="container flex flex-col gap-16 px-3 mx-auto mt-24 mb-16 lg:flex-row">
        <div className="lg:w-2/3">
          <h3 className="mb-4 text-3xl font-semibold text-gray-700 maxwebsite-font-title">Other projects</h3>

          <ul className="pl-6 text-justify list-disc">
            <li className="mt-1">
              <a className="link" href="https://github.com/maksimoreo/maksimoreo.github.io" target="_blank">
                github.com/maksimoreo/maksimoreo.github.io
              </a>{' '}
              - this portfolio webpage
            </li>

            <li className="mt-1">
              <a className="link" href="https://github.com/mkvtech/game2048" target="_blank">
                github.com/mkvtech/game2048
              </a>{' '}
              - clone of a popular{' '}
              <a className="link" href="https://en.wikipedia.org/wiki/2048_(video_game)" target="_blank">
                2048 puzzle game
              </a>
              , written in Java and JavaFX
            </li>

            <li className="mt-1">
              <a className="link" href="https://github.com/maksimoreo/ruby-mastermind" target="_blank">
                github.com/maksimoreo/ruby-mastermind
              </a>{' '}
              - Mastermind terminal puzzle game implementation in Ruby. Works in browser:{' '}
              <a className="link" href="https://maksimoreo.github.io/ruby-mastermind/" target="_blank">
                here
              </a>
            </li>

            <li className="mt-1">
              Please see more projects on my GitHub profiles:{' '}
              <a className="link" href="https://github.com/maksimoreo" target="_blank">
                github.com/maksimoreo
              </a>{' '}
              and{' '}
              <a className="link" href="https://github.com/mkvtech" target="_blank">
                github.com/mkvtech
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:w-1/3">
          <h3 className="mb-4 text-3xl font-semibold text-gray-700 maxwebsite-font-title">My socials</h3>

          <Socials />
        </div>
      </div>
    </div>
  )
}

export default App
