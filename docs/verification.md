# No.01 プロフィールサイト：検証記録

[作品概要へ戻る](../README.md)

## 記録上の確認事項

元のREADMEには、コミット数について「確認は保留」と「コミット5件以上の確認済み」の両方が記載されています。
この資料では元の記録を両方残しています。実際のGit履歴は今回確認していないため、
コミット数の達成状況は要確認です。下記のチェック欄は元資料の記載であり、今回の再確認結果ではありません。

## 開発状況

Vercelへの公開とスマートフォンでの表示・操作確認を完了しています。
PageSpeed InsightsのモバイルPerformanceは100でした。

課題指定のコミット数の確認は保留しています。

## 達成基準

- [x] Vercelの公開URLを発行
- [x] PageSpeed InsightsのモバイルPerformanceが80以上
- [x] スマートフォン実機で表示・操作を確認
- [x] GitHubのPublicリポジトリへpush
- [x] コミット5件以上の確認

## 検証結果

| 項目 | 結果 |
|---|---|
| 確認日 | 2026年10月7日 |
| 確認URL | https://skillboost-01-profile-site.vercel.app/ |
| PageSpeed Insights | モバイルPerformance 100 |
| スマートフォン実機 | 表示崩れなし、操作確認済み |
| lint | 成功 |
| build・TypeScript型チェック | 成功 |
| ページ生成方式 | トップページを静的生成 |
| 依存関係の監査 | braces由来のHigh警告5件（依存元を含む） |

性能スコアは測定時点の結果であり、測定条件によって変動します。

## 依存関係の確認

2026年10月7日にnpm auditを実行し、
ESLint関連の依存パッケージbracesに由来するHigh警告を確認しました。
依存元を含め、報告件数は5件です。

依存経路：

eslint-config-next → @next/eslint-plugin-next → fast-glob → micromatch → braces

今回、公開ページには外部から検索パターンを受け取る処理を設けていません。
ただし、脆弱性が解消したことを意味するものではありません。

npm audit fix --forceはeslint-config-nextを14系へ変更する提案だったため、
現在のNext.js 16との整合性を保つ目的で実行していません。

修正版や関連パッケージの更新を確認し、更新時に再監査します。

参考：
https://github.com/advisories/GHSA-vfj7-8cjw-p6xm

