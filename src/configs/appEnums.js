const WorkerEnums = {
    GET_DATA_FROM_API: 'GET_DATA_FROM_API'
}
const webWorkerPath={
    pullApiPath:'../webworkers/pullApiWorker.js'
}
const AppEnums = {
    ...{
        app: "app",
        home: "home",
        education: "education",
        experience: "experience",
        projects: "projects",
        certificate: "certificate",
        skills: "skills",
        achievement: "achievement",
        basicDisplay: "basicDisplay",
        bottomBar: "bottomBar",
        headerInfo: "headerInfo",
        htmlComponent: "htmlComponent",
        nav: "nav",
        input: "input",
        nodata_ok: "nodata_ok",
        nodata_404: "nodata_404",
        onelinerHeader: "onelinerHeader",
        articles: "articles",
    }, ...{WorkerEnums},...{webWorkerPath}
};
export default AppEnums;
