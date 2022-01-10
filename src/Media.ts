import { Column, Entity, Index, OneToMany } from 'typeorm';
import { MediaTranslation } from './MediaTranslation';

@Index('IX_Media', ['regionId'], {})
@Index('PK_Media', ['mediaId'], { unique: true })
@Entity('Media', { schema: 'dbo' })
export class Media {
  @Column('uniqueidentifier', {
    primary: true,
    name: 'MediaID',
    default: () => 'newsequentialid()',
  })
  mediaId!: string;

  @Column('uniqueidentifier', { name: 'RegionID' })
  regionId!: string;

  @Column('int', { name: 'MediaIndex' })
  mediaIndex!: number;

  @Column('nvarchar', { name: 'MediaName', nullable: true, length: 20 })
  mediaName!: string | null;

  @Column('int', { name: 'MaxTender' })
  maxTender!: number;

  @Column('int', { name: 'MinimumTender' })
  minimumTender!: number;

  @Column('smallint', { name: 'FontHeight' })
  fontHeight!: number;

  @Column('smallint', { name: 'FontWidth' })
  fontWidth!: number;

  @Column('smallint', { name: 'FontEscapement' })
  fontEscapement!: number;

  @Column('smallint', { name: 'FontOrientation' })
  fontOrientation!: number;

  @Column('smallint', { name: 'FontWeight' })
  fontWeight!: number;

  @Column('smallint', { name: 'FontItalic' })
  fontItalic!: number;

  @Column('smallint', { name: 'FontUnderline' })
  fontUnderline!: number;

  @Column('smallint', { name: 'FontStrikeOut' })
  fontStrikeOut!: number;

  @Column('smallint', { name: 'FontCharSet' })
  fontCharSet!: number;

  @Column('smallint', { name: 'FontOutPrecision' })
  fontOutPrecision!: number;

  @Column('smallint', { name: 'FontClipPrecision' })
  fontClipPrecision!: number;

  @Column('smallint', { name: 'FontQuality' })
  fontQuality!: number;

  @Column('smallint', { name: 'FontPitchAndFamily' })
  fontPitchAndFamily!: number;

  @Column('nvarchar', { name: 'FontFaceName', nullable: true, length: 32 })
  fontFaceName!: string | null;

  @Column('int', { name: 'Foreground' })
  foreground!: number;

  @Column('int', { name: 'Background' })
  background!: number;

  @Column('nvarchar', { name: 'ButtonText', nullable: true })
  buttonText!: string | null;

  @Column('bit', { name: 'ForceAmtTender' })
  forceAmtTender!: boolean;

  @Column('bit', { name: 'AllowPickup' })
  allowPickup!: boolean;

  @Column('bit', { name: 'AllowLoan' })
  allowLoan!: boolean;

  @Column('bit', { name: 'AllowRefund' })
  allowRefund!: boolean;

  @Column('smallint', { name: 'OvertenderOption' })
  overtenderOption!: number;

  @Column('bit', { name: 'OvertenderIsTips' })
  overtenderIsTips!: boolean;

  @Column('bit', { name: 'OpenDrawer' })
  openDrawer!: boolean;

  @Column('smallint', { name: 'SpecialOption' })
  specialOption!: number;

  @Column('smallint', { name: 'MinimumSecLevel' })
  minimumSecLevel!: number;

  @Column('bit', { name: 'AskForSuperId' })
  askForSuperId!: boolean;

  @Column('bit', { name: 'NeedMemo' })
  needMemo!: boolean;

  @Column('smallint', { name: 'ForgiveTax' })
  forgiveTax!: number;

  @Column('smallint', { name: 'EuroTermType' })
  euroTermType!: number;

  @Column('int', { name: 'HouseTipPercent' })
  houseTipPercent!: number;

  @Column('smallint', { name: 'CreditCardType' })
  creditCardType!: number;

  @Column('smallint', { name: 'PMSMediaNum' })
  pmsMediaNum!: number;

  @Column('nvarchar', { name: 'PMSAccount', nullable: true, length: 20 })
  pmsAccount!: string | null;

  @Column('bit', { name: 'PromptForSignature' })
  promptForSignature!: boolean;

  @Column('smallint', { name: 'ForeignCurrencyType' })
  foreignCurrencyType!: number;

  @Column('bit', { name: 'NoPartialTender' })
  noPartialTender!: boolean;

  @Column('varbinary', { name: 'ImageData', nullable: true })
  imageData!: Buffer | null;

  @Column('bit', { name: 'NeedCV2', default: () => '(0)' })
  needCv2!: boolean;

  @Column('bit', { name: 'NeedZipCode', default: () => '(0)' })
  needZipCode!: boolean;

  @Column('bit', { name: 'UndertenderTips', default: () => '(0)' })
  undertenderTips!: boolean;

  @Column('bit', { name: 'LimitTerminals', default: () => '(0)' })
  limitTerminals!: boolean;

  @Column('varbinary', { name: 'AllowedTerminals', nullable: true, length: 13 })
  allowedTerminals!: Buffer | null;

  @Column('bit', { name: 'NotInOfflineMode', default: () => '(0)' })
  notInOfflineMode!: boolean;

  @Column('bit', { name: 'MediaLivesInDrawer', default: () => '(0)' })
  mediaLivesInDrawer!: boolean;

  @Column('bit', { name: 'HouseTipLivesInDrawer', default: () => '(0)' })
  houseTipLivesInDrawer!: boolean;

  @Column('bit', { name: 'MediaIsManual', default: () => '(0)' })
  mediaIsManual!: boolean;

  @Column('bit', { name: 'DueRoundingNotAllowed', default: () => '(0)' })
  dueRoundingNotAllowed!: boolean;

  @Column('bit', { name: 'PromptForConfirmation', default: () => '(0)' })
  promptForConfirmation!: boolean;

  @OneToMany(
    () => MediaTranslation,
    (mediaTranslation) => mediaTranslation.media
  )
  mediaTranslations!: MediaTranslation[];
}
