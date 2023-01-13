const Path_Set = "Path_Set";
const Tidx_Add = "Tidx_Add";
const Qna_Init = "Qna_Init";
const Replay_Init = "Replay_Init";

const pathset = (data) => {
    return {
        type: Path_Set,
        payload: data,
    };
};

const tidxadd = (data) => {
    return {
        type: Tidx_Add,
        payload: data,
    };
};  
  
const qnainit = (data) => {
    return {
        type: Qna_Init,
        payload: data,
    };
};  
const replayInit = (data) => {
    return {
        type: Replay_Init,
        payload: data,
    };
};  

export {pathset, tidxadd, qnainit, replayInit};
