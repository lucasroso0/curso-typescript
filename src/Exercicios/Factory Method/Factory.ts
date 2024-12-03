interface Arquivo{
    abrir(): void;
    salvar(): void;
}
class ArquivoPDF implements Arquivo{
    abrir(): void {
        console.log("Abrindo Pdf...")
    }
    salvar(): void {
        console.log("Salvar Pdf...")
    }
}
class ArquivoDOCX implements Arquivo{
    abrir(): void {
        console.log("Abrindo DOCX...")
    }
    salvar(): void {
        console.log("Salvar DOCX...")
    }
}
class ArquivoaXLSX implements Arquivo{
    abrir(): void {
        console.log("Abrindo XLSX...")
    }
    salvar(): void {
        console.log("Salvar XLSX...")
    }
}
class ArquivoTXT implements Arquivo{
    abrir(): void {
        console.log("Abrindo TXT...")
    }
    salvar(): void {
        console.log("Salvar TXT...")
    }
}
abstract class  EditorArquivo {
    abstract criarArquivo(): Arquivo;
    gerenciarArquivo(): void{
        const arquivo = this.criarArquivo();
        arquivo.abrir();
        arquivo.salvar();
    }
}


export class EditorPDF extends EditorArquivo{
    criarArquivo(): Arquivo {
        return new ArquivoPDF
    }
}
export class EditorDOCX extends EditorArquivo{
    criarArquivo(): Arquivo {
        return new ArquivoDOCX
    }
}
export class EditorXLSX extends EditorArquivo{
    criarArquivo(): Arquivo {
        return new ArquivoaXLSX
    }
}
export class EditorTXT extends EditorArquivo{
    criarArquivo(): Arquivo {
        return new ArquivoTXT
    }
}
