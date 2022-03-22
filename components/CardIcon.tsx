import { GiPush, GiPull, GiFemaleLegs, GiMuscularTorso } from "react-icons/gi";


export type Icon = "GiPush" | "GiPull" | "GiFemaleLegs" | "GiMuscularTorso";

type AppProps = {
    icon: Icon
}

const icons = {
    "GiPush": <GiPush />,
    "GiPull": <GiPull />,
    "GiFemaleLegs": <GiFemaleLegs />,
    "GiMuscularTorso": <GiMuscularTorso />
}

const CardIcon = ({icon}: AppProps) => {
    return(icons[icon] ?? null)
}

export default CardIcon
