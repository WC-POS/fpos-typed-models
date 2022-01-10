import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";

import { Report } from "./Report";

@Index("IX_ReportID", ["reportId"], {})
@Index("PK__ReportParameter", ["reportParameterId"], { unique: true })
@Entity("_ReportParameter", { schema: "dbo" })
export class ReportParameter {
  @Column("uniqueidentifier", {
    primary: true,
    name: "ReportParameterID",
    default: () => "newsequentialid()",
  })
  reportParameterId!: string;

  @Column("nvarchar", { name: "ParameterName", nullable: true })
  parameterName!: string | null;

  @Column("varbinary", { name: "ParameterBytes", nullable: true })
  parameterBytes!: Buffer | null;

  @Column("uniqueidentifier", { name: "ReportID", nullable: true })
  reportId!: string | null;

  @Column("bit", { name: "IsActive", default: () => "(1)" })
  isActive!: boolean;

  @ManyToOne(() => Report, (report) => report.reportParameters, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "ReportID", referencedColumnName: "reportId" }])
  report!: Report;
}
