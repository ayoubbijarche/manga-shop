import { bebas } from "../lib/constants";
import Navbar from "../component/navbar";

const About = function About(){
  return (
    <div className={`text-white  flex flex-col ${bebas.className}`}>
      <Navbar/>
      <h1 className="mt-32 text-5xl ml-[4.5rem]">About us</h1>
      <p className="ml-[4.5rem] text-xl mt-3 w-[1000px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue hendrerit rutrum. Phasellus elementum nec nibh a imperdiet. Vivamus pellentesque auctor enim, at fermentum dolor rhoncus vel. Sed suscipit, lectus non eleifend molestie, arcu magna aliquet lorem, a volutpat mauris nisl congue magna. Etiam tristique, nibh non sodales rutrum, enim dolor blandit arcu, facilisis dictum nisl nunc nec risus. Maecenas ut tellus et orci tristique sodales quis ac purus. Praesent gravida maximus tellus ut vehicula. Aliquam sem quam, tincidunt a nisi nec, dignissim porta lectus. Nam sodales risus ipsum, ac iaculis orci commodo vel. Sed scelerisque, mi et pellentesque pretium, mi quam commodo nulla, vitae tristique sapien ligula eu nunc. Quisque pharetra nibh magna. Curabitur aliquet diam at metus aliquet dignissim. Vivamus quis lorem quis purus mollis ullamcorper.
        Donec consectetur lacus lorem, eget auctor leo egestas a. Ut aliquam, ipsum at vestibulum ornare, urna sem cursus eros, a sagittis urna velit id turpis. Ut aliquam odio vitae dui tincidunt tristique. Sed nisi diam, efficitur non nibh eget, tincidunt elementum libero. Nullam hendrerit erat sit amet elementum dictum. Vestibulum at turpis eget metus pretium posuere in eget ante. Duis auctor non nulla nec egestas. Sed id nunc vel neque egestas luctus. Quisque scelerisque at eros ac gravida.
        Nam nec mollis magna, eu feugiat urna. Vivamus convallis ullamcorper neque in pellentesque. Vestibulum id risus massa. Fusce eget vehicula dolor, non venenatis lectus. Maecenas tellus diam, pharetra vel tincidunt sed, euismod id nisl. Vestibulum pretium malesuada massa eget sodales. In scelerisque pulvinar risus, in rhoncus turpis finibus ac. In convallis, augue in porttitor laoreet, lacus neque convallis nibh, quis elementum lacus massa eget nibh. Morbi ut ullamcorper augue, et commodo orci. Etiam aliquam venenatis enim eu dapibus. Praesent ullamcorper imperdiet finibus. Donec maximus, ex in laoreet elementum, libero dolor maximus ipsum, eget bibendum justo massa quis turpis. Mauris tempus molestie ex, quis convallis purus fringilla nec. Cras vitae odio vel est pellentesque efficitur. In sit amet feugiat diam. Nam quis iaculis ipsum.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer ornare, leo vitae dictum porttitor, felis ante convallis lorem, sit amet scelerisque felis nisi ac enim. Proin blandit venenatis odio, nec venenatis quam scelerisque ac. Praesent interdum, lectus in tincidunt pulvinar, lacus quam tristique nibh, in blandit sapien sem vel enim. Praesent ac est auctor, accumsan nisl vitae, dignissim nisi. Curabitur tincidunt, mi vel volutpat sagittis, velit purus scelerisque orci, eu rutrum velit nulla id magna. Donec et pulvinar nunc. Pellentesque sed lacinia lacus.
        Pellentesque enim ipsum, tempor in nisi vitae, condimentum porttitor diam. Maecenas accumsan purus eu leo dignissim convallis. Nulla eget arcu sed nulla scelerisque lacinia ac a tortor. In molestie massa ac accumsan consequat. Morbi eleifend semper varius. Fusce nec massa nisl. Nulla quis rhoncus ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus in mattis ipsum. Duis urna justo, dapibus ac ultrices sit amet, dictum ac odio. Aenean dolor mi, tempor id auctor a, iaculis sit amet eros. Sed id nisl non ex faucibus elementum. Integer vitae urna quis libero viverra commodo non et arcu. Nunc hendrerit sit amet nisi ut volutpat.
      </p>
    </div>
  );
}

export default About;
