import styled from 'styled-components' 



export const Panel = styled.div`
    height: 300px;
    width: 50%;
    padding: 25px;
    display: inline-block;
    border: 2px solid black;
    position: relative;
`;

export const FileBox = styled.div`
    li {
        list-style-type: none;
    }
    position: absolute;
    top: 70px;
    left: 150px;
    width: 400px;
    height: 150px;
    border: 0.5px solid grey;
    padding: 20px;
    
`;

export const FileList = styled.li`
    width: 50%;
    float: left;
    
`;

export const SizeList = styled.li`
    width: 50%;
    position: relative;
    top: -15px;
    right: -150px;
    align: center;
    
`;

export const FileButton = styled.button`
    float: right;
`;

export const Para1 = styled.p`
    float: left;
    width: 47%;
`;

export const Para2 = styled.div`
`;


