import { useAppState } from "../../../hooks/appHook";


export function Nav() {

  return (
    <article className="nav" >
      <button
        className={`nav__btn border-mod-one`}>
        Let's connect
      </button>
      <button
        className={`nav__btn border-mod-two`}>
        Let's connect
      </button>
      <button
        className={`nav__btn border-mod-three`}>
        Let's connect
      </button>
    </article>
  );
}



