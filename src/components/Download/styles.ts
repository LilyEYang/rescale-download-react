import styled from 'styled-components' 

export const Panel = styled.div`
    width: 45 vw;
    height: 50 vh;
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
        align-items: center;
        letter-spacing: 0.03em;

        color: #717171;

    }
`

export const Section = styled.div`
    margin: 0 auto;
    .panels {
        display: flex;
    }
`