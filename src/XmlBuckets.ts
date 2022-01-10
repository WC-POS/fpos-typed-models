import { Column, Entity, Index } from "typeorm";

@Index("PK_XMLBuckets", ["xmlBucketsId"], { unique: true })
@Entity("XMLBuckets", { schema: "dbo" })
export class XmlBuckets {
  @Column("uniqueidentifier", { primary: true, name: "XMLBucketsID" })
  xmlBucketsId!: string;

  @Column("int", { name: "StoreID", default: () => "(0)" })
  storeId!: number;

  @Column("datetime", { name: "BusinessDate" })
  businessDate!: Date;

  @Column("bit", { name: "IsPartial", default: () => "(0)" })
  isPartial!: boolean;

  @Column("int", { name: "Version", default: () => "(0)" })
  version!: number;

  @Column("int", { name: "BucketType", default: () => "(0)" })
  bucketType!: number;

  @Column("nvarchar", { name: "XML", default: () => "''" })
  xml!: string;

  @Column("datetime", { name: "UpdateDate" })
  updateDate!: Date;

  @Column("xml", { name: "XML2", nullable: true })
  xml2!: string | null;
}
