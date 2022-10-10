export type CreatorCardType= {
    creator: CreatorType
}

export type CreatorType = {
    name: string,
    speciality: string,
    slug: string,
    details: string,
    picture: string
}

export type CreatorsType = {
    creators: CreatorType[]
}