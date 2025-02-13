
import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import './skills.css'


const Skills = () => {
 
  const style1 = {
    //.css-eglki6-MuiLinearProgress-root {
    position: "relative",
    overflow: 'hidden',
    display: 'block',
    height: '24px',
    zindex: '0',
    backgroundColor: ' rgb(167, 202, 237)',
    borderRadius: '12px',

  }
  return (
    <>
      <div className="my-32 items-center" id="Skill" style={{ backgroundColor: "#f7f7f7" }}>
        <h1 class="stylish-h1">SKILLS</h1>
        <p className="text-center">My Programming Skill</p>

        <div className=" section grid justify-items-center sm:flex sm:flex-row sm:justify-center py-3" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="sm:w-96 w-60 px-2 " style={{ width: '500px', margin: " 0px 25px" }}>
            <h1 className="text-2xl font-bold text-center">
              {" "}
              <CodeIcon className="mb-2" /> Frontend
            </h1>

            <div className="flex flex-row justify-between mt-4" style={{ display: "flex" }}>
              <div className="flex flex-row">
                <svg
                  stroke="currentColor"
                  fill="red"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  height="25px"
                  width="25px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M145.2 96l66 746.6L512 928l299.6-85.4L878.9 96H145.2zm595 177.1l-4.8 47.2-1.7 19.5H382.3l8.2 94.2h335.1l-3.3 24.3-21.2 242.2-1.7 16.2-187 51.6v.3h-1.2l-.3.1v-.1h-.1l-188.6-52L310.8 572h91.1l6.5 73.2 102.4 27.7h.4l102-27.6 11.4-118.6H510.9v-.1H306l-22.8-253.5-1.7-24.3h460.3l-1.6 24.3z"></path>
                </svg>{" "}
                HTML
              </div>
              <h5 style={{ textAlign: "end", flex: "1" }} >90 %</h5>
            </div>
            <LinearProgress className='linearprogress' variant="determinate" value={90} style={style1} />
            <br />

            <div className="flex flex-row justify-between mt-4" style={{ display: "flex" }}>
              <div className="flex flex-row">
                <svg
                  stroke="currentColor"
                  fill="orange"
                  strokeWidth="0"
                  viewBox="0 0 384 512"
                  height="25px"
                  width="25px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"></path>
                </svg>{" "}
                CSS
              </div>
              <h5 style={{ textAlign: "end", flex: "1" }}>90 %</h5>
            </div>
            <LinearProgress className='linearprogress' variant="determinate" value={90} style={style1} />
            <br />
          
            <div className="flex flex-row justify-between mt-4" style={{ display: "flex" }}>
              <div className="flex flex-row">
                <svg
                  stroke="currentColor"
                  fill="yellow"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="25px"
                  width="25px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M32 32v448h448V32zm240 348c0 43.61-25.76 64.87-63.05 64.87-33.68 0-53.23-17.44-63.15-38.49l34.28-20.75c6.61 11.73 11.63 21.65 26.06 21.65 12 0 21.86-5.41 21.86-26.46V240h44zm99.35 63.87c-39.09 0-64.35-17.64-76.68-42L329 382c9 14.74 20.75 24.56 41.5 24.56 17.44 0 27.57-7.72 27.57-19.75 0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45 0-31.57 24.05-54.63 61.64-54.63 26.77 0 46 8.32 59.85 32.68L396 290c-7.22-12.93-15-18-27.06-18-12.33 0-20.15 7.82-20.15 18 0 12.63 7.82 17.74 25.86 25.56l10.52 4.51c35.79 15.34 55.94 31 55.94 66.16.01 37.9-29.76 57.64-69.76 57.64z"></path>
                </svg>
                JavaScript
              </div>
              <h5 style={{ textAlign: "end", flex: "1" }}>85 %</h5>
            </div>
            <LinearProgress className='linearprogress' variant="determinate" value={85} style={style1} />
            <br />

            <div className="flex flex-row justify-between mt-4" style={{ display: "flex" }}>
              <div className="flex flex-row">
                <svg
                  stroke="currentColor"
                  fill="#3cdfff"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="25px"
                  width="25px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M410.66 180.72q-7.67-2.62-15.45-4.88 1.29-5.25 2.38-10.56c11.7-56.9 4.05-102.74-22.06-117.83-25-14.48-66 .61-107.36 36.69q-6.1 5.34-11.95 11-3.9-3.76-8-7.36c-43.35-38.58-86.8-54.83-112.88-39.69-25 14.51-32.43 57.6-21.9 111.53q1.58 8 3.55 15.93a320.85 320.85 0 00-17.77 5.6C48.46 198.9 16 226.73 16 255.59c0 29.82 34.84 59.72 87.77 77.85q6.44 2.19 13 4.07-2.13 8.49-3.77 17.17c-10 53-2.2 95.07 22.75 109.49 25.77 14.89 69-.41 111.14-37.31q5-4.38 10-9.25 6.32 6.11 13 11.86c40.8 35.18 81.09 49.39 106 34.93 25.75-14.94 34.12-60.14 23.25-115.13q-1.25-6.3-2.88-12.86 4.56-1.35 8.93-2.79c55-18.27 90.83-47.81 90.83-78-.02-29-33.52-57.01-85.36-74.9zm-129-81.08c35.43-30.91 68.55-43.11 83.65-34.39 16.07 9.29 22.32 46.75 12.22 95.88q-1 4.8-2.16 9.57a487.83 487.83 0 00-64.18-10.16 481.27 481.27 0 00-40.57-50.75q5.38-5.22 11.02-10.15zM157.73 280.25q6.51 12.6 13.61 24.89 7.23 12.54 15.07 24.71a435.28 435.28 0 01-44.24-7.13c4.24-13.72 9.46-27.97 15.56-42.47zm0-48.33c-6-14.19-11.08-28.15-15.25-41.63 13.7-3.07 28.3-5.58 43.52-7.48q-7.65 11.94-14.72 24.23t-13.58 24.88zm10.9 24.17q9.48-19.77 20.42-38.78 10.93-19 23.27-37.13c14.28-1.08 28.92-1.65 43.71-1.65s29.52.57 43.79 1.66q12.21 18.09 23.13 37t20.69 38.6Q334 275.63 323 294.73q-10.91 19-23 37.24c-14.25 1-29 1.55-44 1.55s-29.47-.47-43.46-1.38q-12.43-18.19-23.46-37.29t-20.48-38.76zM340.75 305q7.25-12.58 13.92-25.49a440.41 440.41 0 0116.12 42.32 434.44 434.44 0 01-44.79 7.65q7.62-12.09 14.75-24.48zm13.72-73.07q-6.64-12.65-13.81-25-7-12.18-14.59-24.06c15.31 1.94 30 4.52 43.77 7.67a439.89 439.89 0 01-15.37 41.39zm-98.24-107.45a439.75 439.75 0 0128.25 34.18q-28.35-1.35-56.74 0c9.33-12.34 18.88-23.79 28.49-34.18zM145.66 65.86c16.06-9.32 51.57 4 89 37.27 2.39 2.13 4.8 4.36 7.2 6.67A491.37 491.37 0 00201 160.51a499.12 499.12 0 00-64.06 10q-1.83-7.36-3.3-14.82c-9.05-46.23-3.06-81.08 12.02-89.83zm-23.41 251.85q-6-1.71-11.85-3.71c-23.4-8-42.73-18.44-56-29.81-11.88-10.19-17.9-20.36-17.9-28.6 0-17.51 26.06-39.85 69.52-55q8.19-2.85 16.52-5.21a493.54 493.54 0 0023.4 60.75 502.46 502.46 0 00-23.69 61.58zm111.13 93.67c-18.63 16.32-37.29 27.89-53.74 33.72-14.78 5.23-26.55 5.38-33.66 1.27-15.14-8.75-21.44-42.54-12.85-87.86q1.53-8 3.5-16a480.85 480.85 0 0064.69 9.39 501.2 501.2 0 0041.2 51c-2.98 2.93-6.03 5.75-9.14 8.48zm23.42-23.22c-9.72-10.51-19.42-22.14-28.88-34.64q13.79.54 28.08.54c9.78 0 19.46-.21 29-.64a439.33 439.33 0 01-28.2 34.74zm124.52 28.59c-2.86 15.44-8.61 25.74-15.72 29.86-15.13 8.78-47.48-2.63-82.36-32.72-4-3.44-8-7.13-12.07-11a484.54 484.54 0 0040.23-51.2 477.84 477.84 0 0065-10.05q1.47 5.94 2.6 11.64c4.81 24.3 5.5 46.28 2.32 63.47zm17.4-102.64c-2.62.87-5.32 1.71-8.06 2.53a483.26 483.26 0 00-24.31-60.94 481.52 481.52 0 0023.36-60.06c4.91 1.43 9.68 2.93 14.27 4.52 44.42 15.32 71.52 38 71.52 55.43 0 18.6-29.27 42.74-76.78 58.52z"></path>
                  <path d="M256 298.55a43 43 0 10-42.86-43 42.91 42.91 0 0042.86 43z"></path>
                </svg>
                React
              </div>
              <h5 style={{ textAlign: "end", flex: "1" }}>80 %</h5>
            </div>
            <LinearProgress className='linearprogress' variant="determinate" value={80} style={style1} />
            <br />

            <div className="flex flex-row justify-between mt-4" style={{ display: "flex" }}>
              <div className="flex flex-row">
                <svg
                  stroke="currentColor"
                  fill="pink"
                  strokeWidth="0"
                  role="img"
                  viewBox="0 0 24 24"
                  height="25px"
                  width="25px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title></title>
                  <path d="M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061a1.71 1.71 0 00-1.648 1.769c.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.005 4.795-1.603.838-3.296 1.154-4.944.93-1.378-.195-2.456-.81-3.116-1.799-.988-1.499-1.078-3.116-.255-4.734.6-1.17 1.499-2.023 2.099-2.443a9.96 9.96 0 01-.42-1.543C-.868 14.408-.416 18.752.932 20.805c1.004 1.498 3.057 2.456 5.304 2.456.6 0 1.23-.044 1.843-.194 3.897-.749 6.848-3.086 8.541-6.532zm5.348-3.746c-2.32-2.728-5.738-4.226-9.634-4.226h-.51c-.253-.554-.837-.899-1.498-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074a1.69 1.69 0 001.499-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.005 2.622 2.323 3.237 3.897.538 1.288.509 2.547-.045 3.597-.855 1.647-2.294 2.517-4.196 2.517-1.199 0-2.367-.375-2.967-.644-.36.298-.96.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.094-1.647 5.919-3.236.898-1.798.824-4.824-1.47-7.416zM6.49 17.042c.03.899.793 1.648 1.708 1.648h.06a1.688 1.688 0 001.648-1.768c0-.9-.779-1.647-1.693-1.647h-.06c-.06 0-.15 0-.226.029-1.243-2.098-1.768-4.347-1.572-6.772.12-1.828.72-3.417 1.797-4.735.9-1.124 2.593-1.68 3.747-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.45C17.741 3.197 14.686.62 11.764.62 9.02.62 6.49 2.613 5.47 5.535 4.077 9.43 4.991 13.177 6.7 16.174c-.15.195-.24.539-.21.868z"></path>
                </svg>
                Redux
              </div>
              <h5 style={{ textAlign: "end", flex: "1" }}>80 %</h5>
            </div>
            <LinearProgress className='linearprogress' variant="determinate" value={80} style={style1} />
            <br />

            <div className="flex flex-row justify-between mt-4" style={{ display: "flex" }}>
              <div className="flex flex-row">
                <svg
                  stroke="currentColor"
                  fill="purple"
                  strokeWidth="0"
                  viewBox="0 0 576 512"
                  height="25px"
                  width="25px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z"></path>
                </svg>
                Bootstrap
              </div>
              <h5 style={{ textAlign: "end", flex: "1" }}>75 %</h5>
            </div>
            <LinearProgress className='linearprogress mb-8' variant="determinate" value={75} style={style1} />
            <br />
          </div>

          <div className="sm:w-96 w-60 px-2 sm:py-0" style={{ width: '500px', margin: " 0px 9px" }}>
            <h1 className="text-2xl font-bold text-center ">
              {" "}
              <StorageIcon className="mb-2" /> Backend
            </h1>

            <div className="flex flex-row justify-between mt-4" style={{ display: "flex" }}>
              <div className="flex flex-row">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="25px" height="25px">
                <circle cx="128" cy="128" r="112" fill="#5C2D91"/>
                <path fill="#fff" d="M128 42.5a85.5 85.5 0 0 0-85.5 85.5c0 19.8 6.8 38.2 19.3 53.2l66.2 76.3c1.5 1.8 4 1.8 5.5 0l66.2-76.3a85.5 85.5 0 0 0-85.5-85.5zM128 176a47.5 47.5 0 1 1 47.5-47.5 47.5 47.5 0 0 1-47.5 47.5z"/>
              </svg>

                Dot NET CORE
              </div>
              <h5 style={{ textAlign: "end", flex: "1" }}>85 %</h5>
            </div>
            <LinearProgress className='linearprogress' variant="determinate" value={85} style={style1} />
            <br />

            <div className="flex flex-row justify-between mt-4" style={{ display: "flex" }}>
              <div className="flex flex-row">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="25px" height="25px">
                <circle cx="128" cy="128" r="112" fill="#9B4D96"/>
                <path fill="#fff" d="M106.7 185.5c10.7 0 18.5-3.9 23.7-9.4l10.6-14.6c5.1-6.9 8.1-15.4 8.1-24.3V118.6h-17.8v28.4c0 6.7-4.7 10.4-12.1 10.4-6.8 0-12.1-3.6-12.1-10.4V118.6h-17.8v51.3c0 8.9 3.1 17.4 8.1 24.3l10.6 14.6c5.2 5.5 13 9.4 23.7 9.4zM128 41.5c47.9 0 86.4 38.5 86.4 86.4s-38.5 86.4-86.4 86.4-86.4-38.5-86.4-86.4 38.5-86.4 86.4-86.4zm0 157.5c-39.2 0-70.8-31.6-70.8-70.8s31.6-70.8 70.8-70.8 70.8 31.6 70.8 70.8-31.6 70.8-70.8 70.8z"/>
              </svg>

                C#
              </div>

              <h5 style={{ textAlign: "end", flex: "1" }}>80 %</h5>
            </div>
            <LinearProgress className='linearprogress' variant="determinate" value={80} style={style1} />
            <br />

            <div className="flex flex-row justify-between mt-4" style={{ display: "flex" }}>
              <div className="flex flex-row">
                <svg
                  stroke="currentColor"
                  fill="green"
                  strokeWidth="0"
                  role="img"
                  viewBox="0 0 24 24"
                  height="25px"
                  width="25px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title></title>
                  <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"></path>
                </svg>
                MongoDB
              </div>
              <h5 style={{ textAlign: "end", flex: "1" }}>80 %</h5>
            </div>
            <LinearProgress className='linearprogress' variant="determinate" value={80} style={style1} />
            <br />

            <div className="flex flex-row justify-between mt-4" style={{ display: "flex" }}>
              <div className="flex flex-row">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="25px" height="25px">
                <circle cx="50" cy="50" r="45" fill="#D1D3D4"/>
                <path fill="#C7D1D8" d="M50 15l13.5 23.5L50 62 36.5 38.5z"/>
                <path fill="#002D4D" d="M50 35.4L36.6 50l13.4 14.6L63.4 50z"/>
                <path fill="#8A2A1D" d="M50 24.6L37.8 38.4 50 48.5l12.2-10.1z"/>
              </svg>

                SQL Server
              </div>
              <h5 style={{ textAlign: "end", flex: "1" }}>80 %</h5>
            </div>
            <LinearProgress className='linearprogress' variant="determinate" value={80} style={style1} />
            <br />

            <div className="flex flex-row justify-between mt-4" style={{ display: "flex" }}>
              <div className="flex flex-row">
                <svg
                  stroke="currentColor"
                  fill="blue"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="25px"
                  width="25px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M160 389a20.91 20.91 0 01-13.82-5.2l-128-112a21 21 0 010-31.6l128-112a21 21 0 0127.66 31.61L63.89 256l109.94 96.19A21 21 0 01160 389zm192 0a21 21 0 01-13.84-36.81L448.11 256l-109.94-96.19a21 21 0 0127.66-31.61l128 112a21 21 0 010 31.6l-128 112A20.89 20.89 0 01352 389z"></path>
                </svg>
                REST API's
              </div>
              <h5 style={{ textAlign: "end", flex: "1" }}>90 %</h5>
            </div>
            <LinearProgress className='linearprogress' variant="determinate" value={90} style={style1} />
            <br />

            <div className="flex flex-row justify-between mt-4" style={{ display: "flex" }}>
              <div className="flex flex-row">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 64" width="25px" height="25px">
                <g fill="#FF9900">
                  <path d="M48 8c0-4.418-3.582-8-8-8s-8 3.582-8 8 3.582 8 8 8 8-3.582 8-8zm-8 5.6C43.205 13.6 46 11.219 46 8c0-3.218-2.795-5.6-6-5.6s-6 2.382-6 5.6c0 3.219 2.795 5.6 6 5.6zM0 39c0 2.177 1.779 3.94 3.957 3.94h4.333V24H3.957C1.779 24 0 25.763 0 27.94v11.06zM256 39c0 2.177-1.779 3.94-3.957 3.94h-4.333V24h4.333C254.221 24 256 25.763 256 27.94v11.06zM80 64h16V24H80v40zm176-40H160V0h-16v64h16V40zm-32 8c0-4.418-3.582-8-8-8s-8 3.582-8 8 3.582 8 8 8 8-3.582 8-8z"/>
                </g>
              </svg>
                AWS
              </div>

              <h5 style={{ textAlign: "end", flex: "1" }} >85 %</h5>
            </div>
            <LinearProgress className='linearprogress' variant="determinate" value={85} style={style1} />
            <br />
          </div>
        </div>

      </div>
    </>
  );
};

export default Skills;
