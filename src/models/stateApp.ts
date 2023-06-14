

export interface AppState {
  btnList: controlBtn[]

}

interface controlBtn {
  enable: boolean
  style: string
}


export const DEF_APP_STATE: AppState = {
  btnList: [
    { enable: true, style: "border-mod-one" },
    { enable: false, style: "border-mod-two" },
    { enable: false, style: "border-mod-three" }
  ]
}

