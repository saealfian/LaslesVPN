import netflix from "../../assets/netflix.png";
import reddit from "../../assets/reddit.png";
import amazon from "../../assets/amazon.png";
import discord from "../../assets/discord.png";
import spotify from "../../assets/spotify.png";





function SeventhSectio() {

    return (
        <>
            <div class="seventhSectionContainer">
                <div><img src={netflix} alt="" srcset="" /></div>
                <div><img src={reddit} alt="" srcset="" /></div>
                <div><img src={amazon} alt="" srcset="" /></div>
                <div><img src={discord} alt="" srcset="" /></div>
                <div><img src={spotify} alt="" srcset="" /></div>
            </div>
            <div class="seventhSectionContainerMobile">
                <div class="upperImages">
                    <div><img src={netflix} alt="" srcset="" height="50px" width="91px" /></div>
                    <div><img src={reddit} alt="" srcset="" height="23px" width="71px" /></div>
                </div>
                <div class="lowerImages">
                    <div><img src={amazon} alt="" srcset="" height="30px" width="96px" /></div>
                    <div><img src={discord} alt="" srcset="" height="32px" width="95px" /></div>
                    <div><img src="assets/spotify.png" alt="" srcset="" height="26px" width="87px" /></div>
                </div>
            </div>
        </>
    )
}

export default SeventhSectio;