import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Exam } from './exams.entity';
import { PDFDocument, rgb } from 'pdf-lib';


@Injectable()
export class ExamsService {
  constructor(
    @InjectRepository(Exam)
    private examsRepository: Repository<Exam>,
    private dataSource: DataSource
  ) {}

  async storeExams(file: Express.Multer.File, wallet: string): Promise<string> {
    const pdfDoc = await PDFDocument.load(file.buffer);
    const page = pdfDoc.getPages()[0];
    const x = 0;
    const y = 700;
    const width = 612;
    const height = 10;

    page.drawRectangle({
      x,
      y,
      width,
      height,
      color: rgb(1, 1, 1),
      borderColor: rgb(1, 1, 1),
      borderWidth: 0,
    });

    const modifiedPdfBytes = await pdfDoc.save();
    
    const { NFTStorage, File } = require("nft.storage")
    const dotenv = require("dotenv")
    dotenv.config()

    const API_KEY = process.env.NFT_STORAGE_API_KEY
    const client = new NFTStorage({token: API_KEY})
    const someData = new Blob([modifiedPdfBytes])
    const metadata = await client.storeBlob(someData)
    console.log('Metadata stored in Filecoin and IPFS in the URL:', metadata)

    await this.dataSource
    .createQueryBuilder()
    .insert()
    .into(Exam)
    .values([
        { walletId: wallet, cid: metadata },
    ])
    .execute()

    return "Exams stored! " + wallet;
  }

  async getExams(id: string): Promise<Exam[]> {
    const exams = await this.dataSource
    .getRepository(Exam)
    .createQueryBuilder("exam")
    .where("exam.walletId = :walletId", { walletId: id })
    .getMany()
    return exams;
  }

  getExamsEntity(id: string): string {
    return "Here is your exams! " + id;
  }
}