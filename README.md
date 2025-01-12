# Fibonacci API

### プロジェクトの概要

Fibonacci API は，指定された位置のフィボナッチ数を計算して返す RESTful API サービスです．本プロジェクトは，保守性と変更容易性を意識したアーキテクチャ設計を行い，大規模データの取り扱いや高可用性を意識したスケーラブルなインフラ構成が特徴です．また，効率的な開発フローを実現するため，GitHub Actions を用いた CI/CD パイプラインを構築しています．

### プロジェクトの特徴

1. 保守運用性と変更容易性を考慮した設計：
    - 機能ごとにファイルを分割し，役割を明確化したディレクトリ構成．
2. 大規模数値への対応：
    - JavaScript の `BigInt`を利用し，非常に大きな位置のフィボナッチ数も計算可能。
3. コンテナ化とスケーラビリティ：
    - Docker を用いたアプリケーションのコンテナ化。
    - Amazon ECS を使用し、負荷に応じたスケーリングが可能なインフラを実現。
4. 高可用性を意識したインフラ設計：
    - AWS のマルチ AZ 構成を採用し、システムの信頼性を向上。
    - ALB を使用し、リクエストを複数のコンテナに分散。
5. セキュリティを意識したネットワーク設計：
    - パブリックサブネットに ALB を配置し、ECS タスクはプライベートサブネットで実行。
    - NAT Gateway を使用して外部アクセスを制御。
6. 自動化されたテストとデプロイ：
    - GitHub Actions を利用し、コードのテストからデプロイまでを自動化。
    - プルリクエストごとにテストを実行し、品質を確保。
7. 高品質なコード：
    - 可読性と保守性を意識した TypeScript コード。
    - ユニットテストや統合テストを実装し、コード品質を担保。

### 技術スタック

-   バックエンド：
    -   言語：TypeScript
    -   フレームワーク：Express.js
    -   テスト：Jest, Supertest
-   コンテナ化・デプロイメント：
    -   コンテナ：Docker
    -   レジストリ：Amazon Elastic Container Registry (ECR)
    -   オーケストレーション：Amazon Elastic Container Service (ECS) + Fargate
-   CI / CD：
    -   プラットフォーム：GitHub Actions

### ディレクトリ構成

```
.
├── Dockerfile                 # アプリケーションをDockerイメージ化する設定
├── README.md                  # プロジェクトの概要や利用方法を記載
├── ecs-task-def.json          # ECS用のタスク定義
├── jest.config.js             # Jestテストの設定ファイル
├── package-lock.json          # 依存関係の詳細を固定するファイル
├── package.json               # プロジェクトの依存関係とスクリプトの定義
├── src                        # アプリケーションソースコード
│   ├── app.ts                # Expressアプリケーションの設定
│   ├── fibonacci.ts          # フィボナッチ計算ロジック
│   ├── routes                # 各エンドポイントのルーティング
│   │   ├── fibonacciRoute.ts # /fibエンドポイントのルーティング定義
│   │   └── helloRoute.ts     # /helloエンドポイントのルーティング定義
│   └── server.ts             # サーバーの起動ポイント
├── tests                      # テストコード
│   ├── fibonacci.test.ts      # フィボナッチ計算ロジックのユニットテスト
│   └── fibonacciRoute.test.ts # /fibエンドポイントの統合テスト
└── tsconfig.json              # TypeScriptのコンパイル設定
```

### インフラ構成図

![fib_api_infra](https://github.com/user-attachments/assets/936f3b98-7063-4b92-82ad-bc466528cfc4)
