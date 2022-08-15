import SimpleCard from '../../components/simple-card/SimpleCard';

export default function ProblemThreePage() {
    const text = `You know when you got to the doctor and they charge you for stuff grandma? Well I work for a company that ensures providers don't accidentally bill you the wrong amount or for the wrong service. 
        Also we help them handle claims for your services that get them paid from your insurance company. That way you aren't spending hours getting out that exact change in the doctors office`;
    return (
        <div className='main-content'>
            <SimpleCard text={text} />
        </div>
      );
}