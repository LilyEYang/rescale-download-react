import styled from 'styled-components' 

export const Panel = styled.div`
    height: 60vh;
        width: 35vw;
        flex: 1 1 auto;
        padding: 30px;
        margin: 30px;

        background: #FFFFFF;
        border: 1px solid #939393;
        box-sizing: border-box;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
    

    .panelTitle {
        font-family: Quicksand, sans-serif
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 30px;
        letter-spacing: 0.03em;

        color: #717171;
        border-bottom: 2px solid #D1D1D1;
        margin-bottom: 20px;
        padding-bottom: 10px;
    }

    .panelSubheading {
        font-family: Open Sans, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 25px;
        display: flex;
        align-items: center;
        letter-spacing: 0.03em;

        color: #A3A3A3;
        margin-bottom: 5px;
    }

    .downloadDest {
        font-family: Open Sans, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 22px;
        display: flex;
        align-items: center;
        letter-spacing: 0.03em;

        color: #717171;
        margin-bottom: 90px;
    }

    .button {
        text-align: center;
    }
`

export const Section = styled.div`
    margin: 100px;
    margin-top: 80px;

    .panels {
        display: flex;
    }

    .download-title {
        font-family: Quicksand, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 48px;
        line-height: 60px;

        color: #000000;
        margin-left: 25px;
    }
`