import SimpleCard from '../../components/simple-card/SimpleCard';

export default function ProblemOnePage() {
    const simpleCardProps = {
        text: `I have a passion for games ever since I was young. And in my spare time I really enjoy working on mods, modules and other game related things. I would say in that regard I am extremely proud of my first published
        module on the Unity Asset Store some 6+ years ago. You can check the video out below if you want to see exactly what I made.`,
        action: {
            link: 'https://youtu.be/BVfSpLMYtZ8',
            text: 'See Video About It Here'
        }
    }

    return (
        <div className='main-content'>
            <SimpleCard text={simpleCardProps.text} action={simpleCardProps.action} />
        </div>
      );
}