import { FC } from "react";
import TempAtomCreator from "../components/Atom/Creator";
import AtomCreator from "../components/TempAtom/Creator";

const Angel:FC = () =>{
    return (
        <div className="flex flex-col *:flex">
          <div>
            <TempAtomCreator count={12} />
            <AtomCreator count={10} />
          </div>
          <div>
            <TempAtomCreator count={11} />
            <AtomCreator count={2} />
            <TempAtomCreator count={1} />
            <AtomCreator count={9} />
          </div>
          <div>
            <TempAtomCreator count={11} />
            <AtomCreator count={12} />
          </div>
          <div>
            <TempAtomCreator count={11} />
            <AtomCreator count={12} />
          </div>
          <div>
            <TempAtomCreator count={11} />
            <AtomCreator count={6} />
          </div>
          <div>
            <TempAtomCreator count={11} />
            <AtomCreator count={10} />
          </div>
          <div>
            <AtomCreator count={1} />
            <TempAtomCreator count={9} />
            <AtomCreator count={7} />
          </div>
          <div>
            <AtomCreator count={1} />
            <TempAtomCreator count={8} />
            <AtomCreator count={8} />
          </div>
    
          <div>
            <AtomCreator count={2} />
            <TempAtomCreator count={5} />
            <AtomCreator count={12} />
          </div>
    
          <div>
            <AtomCreator count={3} />
            <TempAtomCreator count={3} />
            <AtomCreator count={11} />
            <TempAtomCreator count={1} />
            <AtomCreator count={1} />
          </div>
          <div>
            <AtomCreator count={17} />
          </div>
          <div>
            <AtomCreator count={17} />
          </div>
          <div>
            <TempAtomCreator count={1} />
            <AtomCreator count={16} />
          </div>
          <div>
            <TempAtomCreator count={2} />
            <AtomCreator count={14} />
          </div>
          <div>
            <TempAtomCreator count={3} />
            <AtomCreator count={12} />
          </div>
    
          <div>
            <TempAtomCreator count={4} />
            <AtomCreator count={10} />
          </div>
    
          <div>
            <TempAtomCreator count={5} />
            <AtomCreator count={8} />
          </div>
          <div>
            <TempAtomCreator count={6} />
            <AtomCreator count={2} />
            <TempAtomCreator count={2} />
            <AtomCreator count={2} />
          </div>
          <div>
            <TempAtomCreator count={6} />
            <AtomCreator count={1} />
            <TempAtomCreator count={4} />
            <AtomCreator count={1} />
          </div>
          <div>
            <TempAtomCreator count={6} />
            <AtomCreator count={1} />
            <TempAtomCreator count={4} />
            <AtomCreator count={1} />
          </div>
          <div>
            <TempAtomCreator count={6} />
            <AtomCreator count={2} />
            <TempAtomCreator count={3} />
            <AtomCreator count={2} />
          </div>
        </div>
      );
}
export default Angel