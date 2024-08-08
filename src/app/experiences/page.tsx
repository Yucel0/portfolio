import Card from "@/components/Card"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Deneyimlerim'
}

export type Experience = {
    date: string;
    company: string;
    description: string;
    techStack: string;
}

type Experiences = Array<Experience>;

const experiences:Experiences = [
    {
        date: '2020 Şubat - 2020 Aralık',
        company: 'Eron Yazılım',
        description: 'Frontend developer olarak iş başı yaptığım startup bir şirketti. Çalışan sayısı az ve küçük bir ekiptik, on site olarak haftanın 6 günü çalışıyordum ve 2 adet e-ticaret sitesi geliştirdikten sonra kurumsal bir yere geçme isteğiyle oradan ayrıldım.',
        techStack: 'Kullandığım teknolojiler sırasıyla; HTML5, CSS3, SCSS, Bootstrap, Javascript, React'
    },
    {
        date: '2021 Şubat - 2022 Haziran',
        company: 'BilgeAdam Teknoloji',
        description: 'Frontend developer olarak iş başı yaptığım kurumsal bir firmaydı, outsource olarak Trive(GKG eski adıyla) da çalıştım. Büyük bir ekibin parçasıydım ve birden fazla projelere destek verdim, remote olarak çalışıyordum ve kariyer sıçrayışına geçmek adıyla buradan ayrıldım.',
        techStack: 'Kullandığım teknolojiler sırasıyla; HTML5, CSS3, SCSS, Bootstrap, Javascript, jQuery, React, Git'
    },
    {
        date: '2022 Haziran - 2024 Ağustos',
        company: 'Demirören Medya',
        description: 'Frontend developer olarak iş başı yaptığım kurumsal bir firmaydı. Büyük bir ekibin parçasıydım ve birden fazla projelere destek verdim, destek verdiğim projeler kanal projeleriydi ve remote olarak çalışıyordum ve buradan da ayrılma nedenim ekonomik nedenlerden ötürüydü. Ayrılma kararı aldıktan sonra iş arayışına geçtim ve buradan ayrıldım.',
        techStack: 'Kullandığım teknolojiler sırasıyla; HTML5, CSS3, SCSS, Bootstrap, Javascript, jQuery, React, Git'
    },
    {
        date: '2024 Ağustos - Halen',
        company: 'Paramtech Teknoloji',
        description: 'Senior Frontend developer olarak iş başı yaptığım kurumsal bir firma ve aktif olarak burada çalışıyorum. Büyük bir ekibin parçasından biriyim ve birden fazla projelere destek veriyorum. Hybrid olarak haftanın belirli günleri uzaktan belirli günleri ise ofisten çalışıyorum',
        techStack: 'Kullandığım teknolojiler sırasıyla; HTML5, CSS3, SCSS, Tailwind, Javascript, React, Next, Git, AntDesign, Typescript'
    }
]

export default function Experiences(){
    return (
        <main className="container mx-auto content py-6 grid grid-cols-2 max-[767px]:grid-cols-1 gap-10 max-[767px]:max-w-full max-[767px]:px-4">
            {experiences.map((experience,index) => {
                return <Card item={experience} key={index} />
            })}
        </main>
    )
}